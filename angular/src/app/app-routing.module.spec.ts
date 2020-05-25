import { Router } from "@angular/router"
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RouterTestingModule } from '@angular/router/testing';
import{Location} from '@angular/common'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsService } from './posts/posts.service';
import { AngularMaterialModule } from './angular-material.module';


describe('Router: App',()=>{
let location:Location;
let router:Router;
let fixture;

beforeEach(()=>{
  TestBed.configureTestingModule({
    imports:[RouterTestingModule.withRoutes([
      {path:'',component:PostListComponent},
      {path:'create',component:PostCreateComponent},
      {path:'edit/:postId',component:PostCreateComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent}
    ]),
  HttpClientTestingModule,
  AngularMaterialModule
  ],
    declarations:[
      PostCreateComponent,
      PostListComponent,
      LoginComponent,
      SignupComponent
    ],
    providers:[
      PostsService
    ]
  })

  router=TestBed.get(Router);
  location=TestBed.get(Location);
  fixture=TestBed.createComponent(PostListComponent);
  router.initialNavigation();
})

  it('navigate to "" redirects you to /',fakeAsync(()=>{
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }))

  it('navigate to "create" redirects you to /create',fakeAsync(()=>{
    router.navigate(['create']);
    tick();
    expect(location.path()).toBe('/create');
  }))

  it('navigate to "edit/:postId" redirects you to /edit/:postId',fakeAsync(()=>{
    router.navigate(['edit/:postId']);
    tick();
    expect(location.path()).toBe('/edit/:postId');
  }))

  it('navigate to "login" redirects you to /login',fakeAsync(()=>{
    router.navigate(['login']);
    tick();
    expect(location.path()).toBe('/login');
  }))

  it('navigate to "signup" redirects you to /signup',fakeAsync(()=>{
    router.navigate(['signup']);
    tick();
    expect(location.path()).toBe('/signup');
  }))
})





