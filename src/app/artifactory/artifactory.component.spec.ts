import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactoryComponent } from './artifactory.component';

describe('ArtifactoryComponent', () => {
  let component: ArtifactoryComponent;
  let fixture: ComponentFixture<ArtifactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtifactoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
