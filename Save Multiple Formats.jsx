#target photoshop

main();

function main(){

    if(!documents.length) return;

    var outputFolder = Folder(app.activeDocument.filePath).selectDlg("Select Folder to Save:");
    var saveFile = File(outputFolder + "/" + activeDocument.name);

    //savePNG24(saveFile);
    saveJPEG(saveFile);
    saveTIFF(saveFile);
}

function savePNG24(saveFile){
    var pngOptions = new PNGSaveOptions;
        pngOptions.compression = 9;
        pngOptions.interlaced = false;

        writeFile(saveFile, pngOptions)
    }

function saveJPEG(saveFile){
    var jpegOptions = new JPEGSaveOptions;
        jpegOptions.embedColorProfile = true;
        jpegOptions.quality = 12;

        writeFile(saveFile, jpegOptions)
    }

function saveTIFF(saveFile){
    var tiffOptions = new TiffSaveOptions;
        tiffOptions.alphaChannels = true;
        tiffOptions.annotations = false;
        tiffOptions.embedColorProfile = true;
        tiffOptions.imageCompression = TIFFEncoding.TIFFZIP; //JPEG, NONE, TIFFLZW, TIFFZIP
        tiffOptions.interleaveChannels = true;
        tiffOptions.layers = false;
        tiffOptions.saveImagePyramid = false;
        tiffOptions.transparency = true;

    writeFile(saveFile, tiffOptions)
}

function writeFile(saveFile, options){
    activeDocument.saveAs(saveFile, options, true, Extension.LOWERCASE);
}

