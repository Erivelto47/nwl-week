import {MulterModuleOptions, MulterOptionsFactory} from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import {EnumPathUpload, getEnumKey} from './enum-path-upload';
import {response} from 'express';

class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        destination: function (req, file, cb) {
          try {
            const enumKey = getEnumKey(file.fieldname);
            return cb(null, EnumPathUpload[enumKey]);
          } catch (error) {
            return cb(error);
          }
        },
      })
    };
  }
}

export default MulterConfigService;
