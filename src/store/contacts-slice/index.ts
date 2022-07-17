import { createSlice } from "@reduxjs/toolkit"

const initialState: any = {
    suffixType: [
        { apk: require('../../img/file/apk.png') },
        { doc: require('../../img/file/doc.png') },
        { docx: require('../../img/file/docx.png') },
        { jpg: require('../../img/file/jpg.png') },
        { png: require('../../img/file/png.png') },
        { m4a: require('../../img/file/m4a.png') },
        { mp4: require('../../img/file/mp4.png') },
        { pdf: require('../../img/file/pdf.png') },
        { ppt: require('../../img/file/ppt.png') },
        { pptx: require('../../img/file/pptx.png') },
        { rar: require('../../img/file/rar.png') },
        { txt: require('../../img/file/txt.png') },
        { xls: require('../../img/file/xls.png') },
        { xlsx: require('../../img/file/xlsx.png') },
        { zip: require('../../img/file/zip.png') },
        { file: require('../../img/file/file.png') },
        { directory: require('../../img/file/directory.png') },
        { mp3: require('../../img/file/mp3.png') },
    ]
}

const ContactsSlice = createSlice({
    name: 'Office',
    initialState: initialState,
    reducers: {}
})
export default ContactsSlice;