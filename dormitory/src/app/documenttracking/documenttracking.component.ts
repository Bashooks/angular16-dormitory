import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumenttrackingService } from './documenttracking.service';

@Component({
  selector: 'app-documenttracking',
  templateUrl: './documenttracking.component.html',
  styleUrls: ['./documenttracking.component.css']
})
export class DocumenttrackingComponent implements OnInit {
  profile = "https://s3-alpha-sig.figma.com/img/a779/54ab/bdc5359c3b398aaed29b9aa4ca9d3b49?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCGcvuRUIe4tMcoGunvn~axpthmpfe~7HJ-Ep2lLE9YMFn03p~juHV0nfNr71xdheuMaZ6vMMrPsVore7CTsSZiq3l5UpHzB8QaBdSA~682iL-KQYUb4SIxiLg6-bgjDLON02dd-BFJ4e8gPXX3K576juUd8qS4qa7p1LcKD7Hv8nIxIA4nAw-3MHYkjiF~oF6LTi5invYYpKbn5uc~70vtFzp5B9rpHk-TuJsXRYr4jYKBft-GgRZyOWEzYZPu0ngGQQCtBeoyjfSA-omRoCWfdlTMA4D2JNQquEbzcU-UIhXsXE5Y13vQA5XPz7jiDm5dZIKDYNvUFFG52xiBf6g__"
  logo = "https://s3-alpha-sig.figma.com/img/0e4f/3975/93d5b16382bf16776a56ef96938bf127?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inTS12YyD~UhaHR9uXzLBNLMG96Si-oY0kAvBwEjnEwG2hHkWscio9hKGo28VcK93MkB8ZRWswU8~lBc~-TkEfMTOYi7VX0QU74UfK3OYftXx2hU9BcAxkdrSpkgzuiadoVVq8IMjGc-Qrnq3R5td5SQfz57ZWN9rrAiodUGQsVGoH3z9RxWbEPtZ~V97S6lIyjF9OU3Q-o1ZnxPyeDk0a2A8kQae56sRMeAZ7-UmYHZpvUWVF~EQ9EPbdfyWcyM6FxGBJGhwvxx2SkY4L8qrECIuatMCIuqrPLQI6oCLkPKIpPG-dQ7ZbyenU3vdoyumIYfGdc9KZUeRfkBThCjlQ__"
  dropdown1 = "https://s3-alpha-sig.figma.com/img/3d66/ba0f/3e4e922613954917626b1f7d7b72f16a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bUTtP7MTMcO92Kz41o1TKAcpn2mETf2H8IxawaRt9dsZ92OzgMxhW35G08~HOz72KMOZfR8ItPBQ-XfIMmSEv07OTE8U9G-gKgjqSCqPCSwKQ~UbF3wFeFCuzSFmppCaB3xSTzSCUSY1msfokiMIwch9hk~~g~YhxgTShmJXuBUoI18~OggWXFnm-bNOxVqIR5kypMABVY3R11aj8sn5ZYkOAp8wCe3aPqpWFyoqscKSzCQSS4hKBDAE3G3biv~RsQBXx6SP0-GNYaa4TiM0vtKCwmI48MsHug~wALkUM-mEJ6ubLD3~uNpRS2ldd3ZWcuLM06bGRqKUuJvLmuZaKQ__"
  dropdown2 = "https://s3-alpha-sig.figma.com/img/37e8/c4a0/9929aea2d7934d7b9f9d7a3e859b3d89?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYpLSs9ycBK4gpq9zNaJfgW2g9KX1iZ9HH6yN~J5~U~e~Y3c7T4FdQ5YFpZEXNCrnruHuZOhak9bwbTS9XPmB9rQ72QYd298bIVKjqGC7byMXA-dn8PoJfao7RoC8pWMyaZ6WPF-LIKFfaUl34MYz9nEinrWTgy6zQBMyOwrgJwJ4YrvNS9UezUYsKppvOQuQnJ2XzU~uShzmcugINggUoBUCe04K1QuVzHD6ZXPeesgOH5y~lrLr381pTDkro3V-1fXeyz8kZMPjWijPHFL70Uo-dEOqDCWHe66-gVkXU6jRmI0~CZP8pZycHFtS37nPXPKZlF6pVlh9ruppO3rRA__"
  dropdown3 = "https://s3-alpha-sig.figma.com/img/09e2/16b6/c5026d217c655dbf2e46ec83837576cd?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2xYAxuvkfsjDVi~NWIYIw0odjEhDl35JTUilGLUZrJnAsHEibWevJQZQIh6GrTXYtvUQ-7h2Xe~fNtNxySxzN3osbRVRNFLkZcpPeTsd0Dh-uYvwtzH3EFGoy1Lil21M9Gdz3KoJXCEF7mQvv-j74a9h5XvFBnUUYt-U1H2cMu2iYq5e7wea8KEey1c9ynEet-k5gP4s-OU3RdKEtbML7LNP9pY7tA0C2Ey3qxNgZjEAIAYIcVBDNVHQYA8AethAMTGwS0xnznQRZXyNKxaG3pOi6E1cYmtbisTPDNEY82Xa-GWuyJLqIELp-~BYID9GwbkBs4~5f9eFjQfQ0j-uw__"
  dropdown4 = "https://s3-alpha-sig.figma.com/img/4204/95ec/542bd335d987091c9dd01e6d358bdacc?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFqu6X9yQ~IT~-kh-dPQxCIIBAZslB6CucB0W1pwWTEIipnx8UklWICSrggOwVuvY29ofek865qj9K9uFmXVZMEuFstCNTdzZjz-MDpfgXy-4vJRRhgOE4bPkj3tkJe~DiLNaD9bb5Ytw67lhro3sx2aeO-fhtxw0Ec7eJJorTrkW-Y6-GHWPVQggZ6izf7IfNlyuZTip75Vp-QKLAeoWVnVwsqHbU2IzQu5ivcEngwa-0nSa9a8tXjzTznB6yJcq9PSE-L2NwL5pCPgf0EGeD9mYkFgsIvZ9It3yID5~5wuG-QDFID099SWmJJSjGoN-IQffUovAN-3u1RFfJGA7Q__"
  userInfo: any = null;
  personId: number = 0;
  isLoggedIn: boolean = false;
  documents: any = [];
  usertype: string = ''
  constructor(private rout: Router, private documenttrackingService: DocumenttrackingService) { }

  ngOnInit(): void {
    this.checkToken()
  }

  Gotoupload(){
    this.rout.navigate(['/submitdocuments'])
  }

  checkToken() {
    const token = localStorage.getItem('userToken'); // Adjust the key name if needed
    if (token) {
      this.isLoggedIn = true;
      this.userInfo = this.parseJwt(token);
      this.personId = this.userInfo.id
      this.usertype = this.userInfo.userType
      if (this.userInfo.userType === 'user') {
        this.getDocument()
      } else if (this.userInfo.userType === 'admin') {
        this.documenttrackingService.getDocumentAll().subscribe(
          response => {
            this.documents = response.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
          }, error => {
            console.error('Error retrieving document', error);
          }
        );
      }
    } else {
      this.rout.navigate(['/home'])
    }
  }


  parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
  getDocument(): void {
    if (this.personId) {
      this.documenttrackingService.getDocumentById(this.personId).subscribe(
        response => {
          this.documents = response.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
          console.log('Document retrieved successfully', this.documents);
        },
        error => {
          console.error('Error retrieving document', error);
        }
      );
    } else {
      alert('กรุณากรอก ID ของเอกสาร');
    }
  }
  getadmin() {

  }

  logout() {
    localStorage.clear();
    window.location.reload()
  }

  downloadFile(id: number): void {
    this.documenttrackingService.downloadDocument(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.pdf'; // คุณสามารถเปลี่ยนชื่อไฟล์ที่ต้องการดาวน์โหลดได้ที่นี่
      a.click();
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Error downloading file:', error);
    });
  }

  gotosubmitdocuments() {
    this.rout.navigate(['submitdocuments'])
  }

  editStatus(documentId: number) {
    const newStatus = prompt('Please enter the new status:');
    if (newStatus) {
      this.documenttrackingService.updateDocumentStatus(documentId, newStatus)
        .subscribe(
          response => {
            console.log('Status updated successfully', response);
            window.location.reload()
          },
          error => {
            console.error('Error updating status', error);
          }
        );
    }
  }
  delete(documentId: number) {
    const confirmDelete = window.confirm('คุณต้องการลบเอกสารนี้หรือไม่?ลบแล้วไม่สามารถนำกลับคืนมาได้');
    if (confirmDelete) {
      this.documenttrackingService.delete(documentId).subscribe(
        response => {
          window.location.reload()
        },
        error => {
          console.error('Error deleting document', error);
        }
      );
    } else {
      console.log('Document deletion cancelled');
    }
  }
  

  // Example method to get the status class based on the status

}
