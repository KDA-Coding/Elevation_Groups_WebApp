import { Get } from '@nestjs/common';
import { Controller, NotImplementedException } from '@nestjs/common';

@Controller('groups')
export class GroupsController {

    @Get()
    getGroups() {
        throw new NotImplementedException();
    }

}
