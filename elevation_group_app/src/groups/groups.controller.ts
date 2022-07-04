import { Get } from '@nestjs/common';
import { Controller, NotImplementedException } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {

    constructor(private readonly groupService: GroupsService) {

    }

    @Get()
    getGroups() {
        return this.groupService.findAllGroups();
    }

}
