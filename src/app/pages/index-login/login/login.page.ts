import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user';
import { ApiAuthService } from 'src/app/core/services/api-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User;
  public userForm: FormGroup;

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private router: Router,
    private apiAuthService: ApiAuthService) { }

  ngOnInit() {
    this.initializeForm();
  }

  private async onSign(email, password) {
    const user: User = {
      name,
      email,
      password,
    };
    this.presentLoading();
    await this.apiAuthService.login(user).then((res) => {
      if (res.status === 200 && res.userName) {
        this.dismissLoading();
        this.router.navigateByUrl('home/exercises-levels');
      } else {
        this.dismissLoading();
        this.presentAlert('Usuário ou Senha inválidos! Por favor, tente novamente.');
      }
    }).catch( (e) => {
      this.dismissLoading();
      console.log('error', e);
      this.presentAlert('Falha na autenticação! Por favor, tente novamente.');
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Aguarde....'
    });
    return await loading.present();
  }

  async dismissLoading() {
    return await this.loadingController.dismiss();
  }

  async presentAlert(message: string) {
    const alertPresent = await this.alertController.create({
      message
    });
    return await alertPresent.present();
  }

  public backToIndex() {
    this.router.navigateByUrl('/index-login');
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
