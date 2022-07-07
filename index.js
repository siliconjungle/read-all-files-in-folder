import fs from 'fs'

export const getFilesInFolder = (folder) => {
  return fs.readdirSync(folder)
}

export const loadFiles = (folder) => {
  return getFilesInFolder(folder).map((file) => {
    return {
      name: file,
      content: fs.readFileSync(`${folder}/${file}`, 'utf8'),
    }
  })
}

console.log('_LOAD_FILES_', loadFiles('./md'))
