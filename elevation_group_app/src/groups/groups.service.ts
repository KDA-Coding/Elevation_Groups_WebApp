import { GroupModel } from './groups.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupsService {
    _groups: GroupModel[] = [
        { id: 1,
        campus: "Asheville",
        demographic: "Men",
        group_type: "Marriage",
        meeting_date: "2020-11-02T19:16:57.985Z",
        zip_code: 28105,
        description: "A Men's group to help guide " + 
        "married men through marriage hardships"}
    ]
}
