import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
