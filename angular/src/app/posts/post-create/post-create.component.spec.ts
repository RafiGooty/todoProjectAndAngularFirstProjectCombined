import { PostCreateComponent } from "./post-create.component"
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PostsService } from '../posts.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";
import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule,Validators,FormGroup,FormControl } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Post } from '../post.model';
import { environment } from 'src/environments/environment';




//Post Create Component Check
fdescribe('post create component tests',()=>{

  let component:PostCreateComponent;
  let fixture:ComponentFixture<PostCreateComponent>;
  let httpMock:HttpTestingController;


  beforeEach(async()=>{
    TestBed.configureTestingModule({
      declarations:[PostCreateComponent],
       imports:[
                  HttpClientTestingModule,
                  RouterTestingModule,
                  FormsModule,
                  ReactiveFormsModule,
                  AngularMaterialModule,
                  FontAwesomeModule,
                  BrowserAnimationsModule,
                  NoopAnimationsModule
                ],
      providers:[PostsService]
    }).compileComponents();

    fixture=TestBed.createComponent(PostCreateComponent);
    component=fixture.componentInstance;

    httpMock=TestBed.get(HttpTestingController);
  })

  it('is post create component defined',()=>{
    fixture=TestBed.createComponent(PostCreateComponent);
    component=fixture.componentInstance;
    expect(component).toBeDefined();
  })

  it('is form valid when empty',()=>{
    fixture=TestBed.createComponent(PostCreateComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();

    let title=component.ReactiveformGroup.controls["title"];
    title.setValue("Hello");
    let content=component.ReactiveformGroup.controls["content"];
    content.setValue("Hello");
    let image=component.ReactiveformGroup.controls["image"];
    image.setValue("Hello");
    expect(component.ReactiveformGroup.valid).toBeTruthy();
  })

  it('is form invalid when title has less than 3 characters',()=>{
    fixture=TestBed.createComponent(PostCreateComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();

    let title=component.ReactiveformGroup.controls["title"];
    title.setValue("He");
    let content=component.ReactiveformGroup.controls["content"];
    content.setValue("Hello");
    let image=component.ReactiveformGroup.controls["image"];
    image.setValue("Hello");
    expect(component.ReactiveformGroup.valid).toBeFalsy();
    expect(component.ReactiveformGroup["title"]).toBeFalsy();
  })

  it('is form invalid when title and content empty',()=>{
    fixture=TestBed.createComponent(PostCreateComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();

    let title=component.ReactiveformGroup.controls["title"];
    title.setValue("");
    let content=component.ReactiveformGroup.controls["content"];
    content.setValue("");
    let image=component.ReactiveformGroup.controls["image"];
    image.setValue("Hello");
    expect(component.ReactiveformGroup.valid).toBeFalsy();
  })

  it('is the edit post calling from the component',async(()=>{
    fixture=TestBed.createComponent(PostCreateComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();

    component.postsService.editData("5eaf8368e73a3f11e38d6e49").subscribe(post=>{
    });
    const request=httpMock.expectOne(environment.apiUrl+ "/data/"+'5eaf8368e73a3f11e38d6e49');
    expect(request.request.method).toBe('GET');
  }))

  // it('is the add post calling from the component',async(()=>{
  //   fixture=TestBed.createComponent(PostCreateComponent);
  //   component=fixture.componentInstance;
  //   fixture.detectChanges();

  //   // const post:Post={
  //   //   id :'1',title:'Good Morning Thursday',content:'Good Morning',imageUrl:'no image', creator:null
  //   // }

  //   let file:Blob;

  //   component.postsService.addPost('1','Good Morning Thursday','Good Morning',file);

  //   const request=httpMock.expectOne(environment.apiUrl+ "/data/");
  //   expect(request.request.method).toBe('POST');
  // }))
})
