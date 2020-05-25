import { async } from "rxjs/internal/scheduler/async"
import { PostListComponent } from './post-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsService } from '../posts.service';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from 'protractor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Subscription }   from 'rxjs';

describe('post List Component test',()=>{

  let component:PostListComponent;
  let fixture:ComponentFixture<PostListComponent>;
  let httpMock:HttpTestingController;
  let debugElement: DebugElement;

  beforeEach(async()=>{

    TestBed.configureTestingModule({
      declarations: [PostListComponent
      ],
      imports:[AngularMaterialModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ] ,
      providers:[ PostsService,
                  AuthService
      ]
    }).compileComponents

    fixture=TestBed.createComponent(PostListComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();

  })

  afterEach(() => {
    fixture.destroy();

  })

  it('is post list component is true ?',()=>{
    expect(component).toBeTruthy();
    })

  it('is form not authorized by default?',()=>{
  expect(component.isAuthorized).toBeFalse();
  })

  it('is default post perPage 2 ? ',()=>{
    expect(component.postsperPage).toBe(2);
    })

  it('is edit and delete Icons used? ',()=>{
    expect(component.faTrashAlt).toBeTruthy();
    expect(component.faEdit).toBeTruthy();
    })

  // it('is the edit post calling from the component', ()=>{
  //   fixture.detectChanges();
  //   debugElement.query(By.).triggerEventHandler
  //   // component.onDelete("5eaf8368e73a3f11e38d6e49");

  //   });


})
