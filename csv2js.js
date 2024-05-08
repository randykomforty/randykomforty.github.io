// csv2js converter
// amimifafa 2024-05-01

function setup() {
	input = createFileInput(convertcsv);
}

function convertcsv(filein) {
/* 	// for some reason the file type is given as "data:application/vnd.ms-excel",
	// where I would have expected "text/csv", so instead of plain text, it reads as base64 
	// that has to be decoded. First, the file type text and comma afterward must be removed,
	// leaving just the base64 data to decode:
	var datain = filein.data;
	datain = datain.substring(datain.indexOf(",") + 1);
	var strin = atob(datain); */
	
	// reading it as a .txt file fixes the above issue
	var strin = filein.data; 
	var strout = "ENTRIES = [\n";
	
	// iterate thru all the lines of the file
	var index = -1; var newlineindex, currline, currlinefinalchars, currentry;
	var multilinemode = false;
	while (index < strin.length){
		newlineindex = strin.indexOf("\n", index + 1);
		if (newlineindex == -1){ 
			break; 
		}
		currline = strin.substring(index + 1, newlineindex);
	
		// I don't know why, but on lines ending with quotation marks, a substring starting
		// at currline.length - 1 returns empty, while on normal lines it returns the last char.
		// So we get the last two chars and look for quotation mark there
		currlinefinalchars = currline.substring( currline.length - 2 )
		
		// if multi-line mode was activated from a previous line, then don't clear the entry
		if (!multilinemode){ currentry = ""; }

		// If the line begins with a quotation mark, then multiple lines will be concatenated into one entry
		if (currline.substring(0,1) == "\""){
			multilinemode = true;
		}
		
		currentry += currline;
		
		if (!multilinemode){
			strout += createEntry(currentry);
		}
		
		// If the line ends with a quotation mark while in multi-line mode,
		// then this is the last line to be concatenated into the multi-line entry
		else if (currlinefinalchars.indexOf("\"") != -1){
			multilinemode = false;
			// remove last two chars from entry, which are the " and newline 
			currentry = currentry.substring( 0, currentry.length - 2 )
			strout += createEntry(currentry);
		}
		
		index = newlineindex;
	}
	
	strout += "]"
	
	saveStrings([strout], "entries", "js");
}

function createEntry( textin ){
	var strout = "	{\n";
	var firstspaceindex = textin.indexOf(" ")
	var firstword = textin.substring( 0, firstspaceindex )
	
	// remove quotation mark from beginning, and punctuation such as : and , from end
	// but don't remove - and ⸗ because those are important
	if (firstword.substring(0,1) == "\""){ firstword = firstword.substring(1) }
	if (firstword.substring( firstword.length - 1 ) == ":"){ firstword = firstword.substring(0, firstword.length - 1) }
	if (firstword.substring( firstword.length - 1 ) == ","){ firstword = firstword.substring(0, firstword.length - 1) }
	
	// the title of the entry
	strout += "		\"title\": \"" + firstword + "\"\n";
	
	// the body text of the entry
	var body = textin.substring( firstspaceindex + 1 )
	strout += "		\"text\": \"" + body + "\"\n";
	
	strout += "	},\n"
	
	return strout;
}