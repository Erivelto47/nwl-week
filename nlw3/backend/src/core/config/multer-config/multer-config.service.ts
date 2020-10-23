import {MulterModuleOptions, MulterOptionsFactory} from '@nestjs/platform-express';
import { diskStorage, MulterError } from 'multer';

import {EnumPathUpload, getEnumKey} from './enum-path-upload';

class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        destination: function (req, file, cb) {

          const enumKey = getEnumKey(file.fieldname);

          return !enumKey.error
            ? cb(null, EnumPathUpload[enumKey.key])
            : cb(new MulterError("File type not found."));
        },
      })
    };
  }
}

export default MulterConfigService;
