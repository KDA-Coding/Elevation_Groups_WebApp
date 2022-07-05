import { Get, NotFoundException, Param } from '@nestjs/common';
import { Controller, NotImplementedException } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {

    constructor(private readonly groupService: GroupsService) { }

    @Get()
    getGroups() {
        return this.groupService.findAllGroups();
    }

    @Get(':groupId')
    getGroupById(@Param('groupId') id:number) {
        let group = this.groupService.findGroupById(id);

        if (!group) {
            throw new NotFoundException(`Task with Id ${id} not found`);
        }

        return group;
    }

}
