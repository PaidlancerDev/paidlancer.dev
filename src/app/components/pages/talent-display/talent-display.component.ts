import { Component, Input, OnInit, inject } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { Talent } from "../../../models/talent";
import { TalentService } from "../../../services/talent.service";

@Component({
	selector: "app-talent-display",
	standalone: true,
	imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
	templateUrl: "./talent-display.component.html",
	styleUrl: "./talent-display.component.scss",
})
export class TalentDisplayComponent implements OnInit {

  @Input() talentUsername!: string;

  talent!: Talent;
	private talentService = inject(TalentService);

  ngOnInit(): void {
    if (this.talentUsername) {
      this.talentService
        .getTalentByUsername(this.talentUsername)
        .subscribe((talent) => {
          this.talent = talent;
        });
    }
	}
}
