import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListAduanPage } from './list-aduan.page';

describe('ListAduanPage', () => {
  let component: ListAduanPage;
  let fixture: ComponentFixture<ListAduanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAduanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListAduanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
