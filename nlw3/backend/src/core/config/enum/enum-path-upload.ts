/**
 * Created by erivelto on 21/10/20
 */

export enum EnumPathUpload {

  IMAGES = "./src/database/storage/images",
  GENERALFILES = "./src/database/storage/files"
}

export function getEnumKey(name: string): { error?: boolean; key?: string } {

  for (let enumPathUploadKey in EnumPathUpload) {
    if(enumPathUploadKey === name.toUpperCase()) {
      return { key: enumPathUploadKey };
    }
  }

  return { error: true }
}
