import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';



@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {
  header="https://s3-alpha-sig.figma.com/img/5dbf/70bc/e93e186ad21a65654e5d79f78d87c359?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iR18MeN1KhbFiDrd7-64exaBZrTgcqm2qyn9a0Y8lMR-49cfK5VvhzhhHs4OVEiQ3rEtvyz6DB9nuwb14yGuNoeejpBETQ5CknNveUWmeTCkIKOa8tH8uxsy8cv0Bqq~03tc5IurS~iyteF-hPW7wO1qjrcAMcUTxJADmL4Yg0UoHpTP6V~dIoQpWzj~fTdOEJvo1X-a530SOEsWWbHrYrxD2ij2B1z0B8BATHIofLnnVVmN6oQeYUG2SEFEb48xSBgcsDqx0bv8brVTVnE0i1OTaC5duKBoW963kMNe3FZEo~6Hj9531yO21XAyQyfyp8QTqRo44Msgi0t8fcMvXg__"
  footerimage = "https://s3-alpha-sig.figma.com/img/c676/1b1e/e36fb872b09125832952d247e27c8e7e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1wesFswjDczDqSG03V38wHeI-zH9SBJyvnSZFkU9kaBmX-XXYdX43AQsuhM0NI8zyNjb8JvIp--wYBEe~n1CfkCwc3gb8CQW~cF5wYgg4XarX8p1ON68imZQJF1RvG0BeQR0OJ-nH0ev5HloZ5ypZ35J1UFV~dvtedMiM8Evl0QDKdzTttfODHSZNsCm4h1jalK~t8uxRGzKA43Je6aNo2bf12WNhOq~o5FPzulcNbF1ngUoH6nEySEjnO1NaP-yP1pNY93N37yLD3sdDFvUXiLBvXoMrnzD36XXiJrfIjxnmnbeUTPv0FSAkbaeEezaVBVuFSjE3LEcLDHSlu5tg__"
  logo="https://s3-alpha-sig.figma.com/img/0e4f/3975/93d5b16382bf16776a56ef96938bf127?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inTS12YyD~UhaHR9uXzLBNLMG96Si-oY0kAvBwEjnEwG2hHkWscio9hKGo28VcK93MkB8ZRWswU8~lBc~-TkEfMTOYi7VX0QU74UfK3OYftXx2hU9BcAxkdrSpkgzuiadoVVq8IMjGc-Qrnq3R5td5SQfz57ZWN9rrAiodUGQsVGoH3z9RxWbEPtZ~V97S6lIyjF9OU3Q-o1ZnxPyeDk0a2A8kQae56sRMeAZ7-UmYHZpvUWVF~EQ9EPbdfyWcyM6FxGBJGhwvxx2SkY4L8qrECIuatMCIuqrPLQI6oCLkPKIpPG-dQ7ZbyenU3vdoyumIYfGdc9KZUeRfkBThCjlQ__"

  iconimg1="https://s3-alpha-sig.figma.com/img/e746/6a3f/4b57963fe0e7a61156b5a588c4d01db7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhwaEHpETx5zQIPDNoTnUcRnSQowlUtQ0hVMLGL28VhRkzU~woKoDLxJMq8WApVp8QrbXsQD1r8Dkfhs-AOZaJr21NEJjVO5TR7rI-q93NNGq7liXQqGpKMCBPRl5a4GcYkQFSaUo3LP4y285Wpdgur42PDjStz70xjLaWy859g~d1XhD9X6Wyss1-VCd9s24YerbqMW6b42HO~F4Do~IYJ6~OnneyQ0h4N10MOw2Oy06WLTtUl99Obxl3E0S5klEiJyWB4XBvrT1ruhpQIDZ1Qxk2FHnLmqV6IuQ28ODNQ0sqAkCG5cHEWsLw1Klyx-9vwn7YiK~EUsMDn0uKI1-w__"
  iconimg2="https://s3-alpha-sig.figma.com/img/b149/80a5/5f834dac6eed5054532dc13556d3da3b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UqxZt0GsAC-pSy3x86YcdJTCHYG7lx0J~PusOika7qbNB0Enj7qsaKkfi1hm9hgT5XfVwU7BZQXQwCATUGR5EVJ60YrRAdpMkfKS5pjv9Bkrbb~qOxGGHZjwdgLvAY0RpVY9WKB2oq9DoJZLh9CFbXl3wIXP7fImTL78YegJLAF9ZIahDLFndhEZC1914cr3V9tsdNhMW4lGHDZxEJC3g4r5GumCV4Cm0dG3uko03VaMF~0OicPN~LODdCqB0y2WCMQ6rJxh8T1T~mH~h83AlNXj7J5jwPiHOuG8MNpIKZ94Pix~LNHWVGwUrL0gnbUJe1~HVfpbbzSjzo1zPAsi0g__"
  iconimg3="https://s3-alpha-sig.figma.com/img/60c7/24bd/f5b50af42a8ccc49d474f1d6fcd52d5f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nrrJBqq0-fXhv~d74v18xnihdbHJlnSxW--18lQRLLqmhnd1DU4h6a50W0cANIlT~I2053~OTUXhZ~JFAwceRNvmH43FS~Bm65-VnZecqTJIWfukcQusy5gFw1OtT05vG0Kv~KeggNCvdleCvjqUXWyzmjYvROMZJU6QGEDZRrWNWCciJOGNPaL48-kSXaG8~imzFyJzhe1xDxeYuBf2TUfsd1zIrJYTCaDCVI3CDiXGN-Pg~s5CvbnuBctwxM9HXCFL8xJamZHCoPezSg9CZrxJv0vwcaihhhzv77-avIsuvEK7a6qmOo4PubouTUBvNkE5ihVpuwv8CStQGsb3Pw__"
  iconimg4="https://s3-alpha-sig.figma.com/img/846a/2cd7/2301426d5e7134138883a007e276684c?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flVs-06ljY~czJmMOBSmZMC2ftziZ0c3XgBKcB9Qdi9GyHknx5ByOQuuEGsSMIETZuMj4yoMosBgKzcwtffxMYA9YqFKju2TIaSauucTg3FSHk9nNq65-nvtWn7udw7KlMzDyupvJfd3Kq~j-yXUS~rdgLAGMgsv7eU8R11IycEE36t3V2IiU93ZJtHqy6tdxiFpq4jb62Y51jsAxGptahIj~uuvFiDF~f~7mCvmFs6tHV4gn7z0hbaTUV4ayU4g4LGQzwQOKxo3l6ed4INcwozrvw-yLpmcrGItkyoYyzVqJMgtMxvRyGGSlOIW-P7VslbAYSy8vCklFQhIknuNSg__"


  dateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.dateForm = this.fb.group({
      
    });
  }

  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent, {
      width: '432px',
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '432px',
    });
  }

  }










  