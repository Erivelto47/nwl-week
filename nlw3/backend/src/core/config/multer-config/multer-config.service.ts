import {MulterModuleOptions, MulterOptionsFactory} from '@nestjs/platform-express';
import { diskStorage } from 'multer';

class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      dest: '/upload',
      storage: diskStorage
    };
  }
}

export default MulterConfigService;
