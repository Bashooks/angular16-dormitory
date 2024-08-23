import { Component } from '@angular/core';

@Component({
  selector: 'app-dormitory',
  templateUrl: './dormitory.component.html',
  styleUrls: ['./dormitory.component.css']
})
export class DormitoryComponent {
profile="https://s3-alpha-sig.figma.com/img/a779/54ab/bdc5359c3b398aaed29b9aa4ca9d3b49?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCGcvuRUIe4tMcoGunvn~axpthmpfe~7HJ-Ep2lLE9YMFn03p~juHV0nfNr71xdheuMaZ6vMMrPsVore7CTsSZiq3l5UpHzB8QaBdSA~682iL-KQYUb4SIxiLg6-bgjDLON02dd-BFJ4e8gPXX3K576juUd8qS4qa7p1LcKD7Hv8nIxIA4nAw-3MHYkjiF~oF6LTi5invYYpKbn5uc~70vtFzp5B9rpHk-TuJsXRYr4jYKBft-GgRZyOWEzYZPu0ngGQQCtBeoyjfSA-omRoCWfdlTMA4D2JNQquEbzcU-UIhXsXE5Y13vQA5XPz7jiDm5dZIKDYNvUFFG52xiBf6g__"
logo = "https://s3-alpha-sig.figma.com/img/0e4f/3975/93d5b16382bf16776a56ef96938bf127?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inTS12YyD~UhaHR9uXzLBNLMG96Si-oY0kAvBwEjnEwG2hHkWscio9hKGo28VcK93MkB8ZRWswU8~lBc~-TkEfMTOYi7VX0QU74UfK3OYftXx2hU9BcAxkdrSpkgzuiadoVVq8IMjGc-Qrnq3R5td5SQfz57ZWN9rrAiodUGQsVGoH3z9RxWbEPtZ~V97S6lIyjF9OU3Q-o1ZnxPyeDk0a2A8kQae56sRMeAZ7-UmYHZpvUWVF~EQ9EPbdfyWcyM6FxGBJGhwvxx2SkY4L8qrECIuatMCIuqrPLQI6oCLkPKIpPG-dQ7ZbyenU3vdoyumIYfGdc9KZUeRfkBThCjlQ__"
dropdown1="https://s3-alpha-sig.figma.com/img/3d66/ba0f/3e4e922613954917626b1f7d7b72f16a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bUTtP7MTMcO92Kz41o1TKAcpn2mETf2H8IxawaRt9dsZ92OzgMxhW35G08~HOz72KMOZfR8ItPBQ-XfIMmSEv07OTE8U9G-gKgjqSCqPCSwKQ~UbF3wFeFCuzSFmppCaB3xSTzSCUSY1msfokiMIwch9hk~~g~YhxgTShmJXuBUoI18~OggWXFnm-bNOxVqIR5kypMABVY3R11aj8sn5ZYkOAp8wCe3aPqpWFyoqscKSzCQSS4hKBDAE3G3biv~RsQBXx6SP0-GNYaa4TiM0vtKCwmI48MsHug~wALkUM-mEJ6ubLD3~uNpRS2ldd3ZWcuLM06bGRqKUuJvLmuZaKQ__"
dropdown2="https://s3-alpha-sig.figma.com/img/37e8/c4a0/9929aea2d7934d7b9f9d7a3e859b3d89?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYpLSs9ycBK4gpq9zNaJfgW2g9KX1iZ9HH6yN~J5~U~e~Y3c7T4FdQ5YFpZEXNCrnruHuZOhak9bwbTS9XPmB9rQ72QYd298bIVKjqGC7byMXA-dn8PoJfao7RoC8pWMyaZ6WPF-LIKFfaUl34MYz9nEinrWTgy6zQBMyOwrgJwJ4YrvNS9UezUYsKppvOQuQnJ2XzU~uShzmcugINggUoBUCe04K1QuVzHD6ZXPeesgOH5y~lrLr381pTDkro3V-1fXeyz8kZMPjWijPHFL70Uo-dEOqDCWHe66-gVkXU6jRmI0~CZP8pZycHFtS37nPXPKZlF6pVlh9ruppO3rRA__"
dropdown3="https://s3-alpha-sig.figma.com/img/09e2/16b6/c5026d217c655dbf2e46ec83837576cd?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2xYAxuvkfsjDVi~NWIYIw0odjEhDl35JTUilGLUZrJnAsHEibWevJQZQIh6GrTXYtvUQ-7h2Xe~fNtNxySxzN3osbRVRNFLkZcpPeTsd0Dh-uYvwtzH3EFGoy1Lil21M9Gdz3KoJXCEF7mQvv-j74a9h5XvFBnUUYt-U1H2cMu2iYq5e7wea8KEey1c9ynEet-k5gP4s-OU3RdKEtbML7LNP9pY7tA0C2Ey3qxNgZjEAIAYIcVBDNVHQYA8AethAMTGwS0xnznQRZXyNKxaG3pOi6E1cYmtbisTPDNEY82Xa-GWuyJLqIELp-~BYID9GwbkBs4~5f9eFjQfQ0j-uw__"
dropdown4="https://s3-alpha-sig.figma.com/img/4204/95ec/542bd335d987091c9dd01e6d358bdacc?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFqu6X9yQ~IT~-kh-dPQxCIIBAZslB6CucB0W1pwWTEIipnx8UklWICSrggOwVuvY29ofek865qj9K9uFmXVZMEuFstCNTdzZjz-MDpfgXy-4vJRRhgOE4bPkj3tkJe~DiLNaD9bb5Ytw67lhro3sx2aeO-fhtxw0Ec7eJJorTrkW-Y6-GHWPVQggZ6izf7IfNlyuZTip75Vp-QKLAeoWVnVwsqHbU2IzQu5ivcEngwa-0nSa9a8tXjzTznB6yJcq9PSE-L2NwL5pCPgf0EGeD9mYkFgsIvZ9It3yID5~5wuG-QDFID099SWmJJSjGoN-IQffUovAN-3u1RFfJGA7Q__"
dormitories = [
 {
    name: 'เลอเลิศ อพาร์ตเมนต์',
    type: 'หอพัก',
    rating: 0,
    location: 'กรุงเทพฯ',
    price: 416.31,
    availability: true,
    imageUrl: 'https://s3-alpha-sig.figma.com/img/fed7/4aec/0500f5786847bae4c0e7de68afb426ed?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eIfZxu0PkTxgMUXKBcE0e2gDqWSWLJk0UgbcPMyIZ-0AqNJ4Hg3Xs-rE76m5K1-WQk8fDO1bOnld0XS7iddue5PwCwX2QsXphZsYL6Q0BpDG61yZNOlkHp49FhP2q-usJjYFHMkiEudAF0GCZDn~u7VP9xbYIknTFhxuZfc~6GzkfpkUfkceV5fIa6pwDWvfEPhhqx28Qq9oq-aTGKmZ0zz2mdhl03K0p-UxlhjzIJ3Z3NIjld9eBEjX8AceSih23U9f~CSsw6peSfK5BqP~W4Zj1-WdGKoT6lNDyFFq~BpOdcMGjgchVWfNzdWqohwiCbti4MWEEBtumSR8~k6yCw__'
  },
  {
    name: 'เลอเลิศ อพาร์ตเมนต์',
    type: 'หอพัก',
    rating: 4,
    location: 'กรุงเทพฯ',
    price: 416.31,
    availability: true,
    imageUrl: 'https://s3-alpha-sig.figma.com/img/d62a/82c0/40480d66983ccb33f444345853921108?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3eKbwrvCPAeTA9rw1k9~FfzHA~GLLrqicPi5jiHQiqKK-QneZsrrDJlTMVp4cW0NNVgTZR4pL6UmjelAdefvJe5APOFqtppHyBjFx86xq2FpX0YQtdP5OsSdJ8U51wUYSKRzFrpouPYs58jWo7TX~1CfsrTRN6quvBOLZUptWu6mkWBMguf7W4ObbIimQ1NQMTSp~v1HkEU8GQMWVKVayo8Vz9qen8FUIThG4F0YvhO4roPz2eCcpUnRJ~C4IPNGyTfH6Afd5auGxqF-Lj7GrHVRcM5FTPZ4F3NrsE7VuSYw73JoNdB-lM6mxXkIDsDy58u7Xny28we5dcK5~XyHQ__'
  },{
    name: 'เลอเลิศ อพาร์ตเมนต์',
    type: 'หอพัก',
    rating: 0,
    location: 'กรุงเทพฯ',
    price: 416.31,
    availability: true,
    imageUrl: 'https://s3-alpha-sig.figma.com/img/fed7/4aec/0500f5786847bae4c0e7de68afb426ed?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eIfZxu0PkTxgMUXKBcE0e2gDqWSWLJk0UgbcPMyIZ-0AqNJ4Hg3Xs-rE76m5K1-WQk8fDO1bOnld0XS7iddue5PwCwX2QsXphZsYL6Q0BpDG61yZNOlkHp49FhP2q-usJjYFHMkiEudAF0GCZDn~u7VP9xbYIknTFhxuZfc~6GzkfpkUfkceV5fIa6pwDWvfEPhhqx28Qq9oq-aTGKmZ0zz2mdhl03K0p-UxlhjzIJ3Z3NIjld9eBEjX8AceSih23U9f~CSsw6peSfK5BqP~W4Zj1-WdGKoT6lNDyFFq~BpOdcMGjgchVWfNzdWqohwiCbti4MWEEBtumSR8~k6yCw__'
  },
  {
    name: 'เลอเลิศ อพาร์ตเมนต์',
    type: 'หอพัก',
    rating: 4,
    location: 'กรุงเทพฯ',
    price: 416.31,
    availability: true,
    imageUrl: 'https://s3-alpha-sig.figma.com/img/d62a/82c0/40480d66983ccb33f444345853921108?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3eKbwrvCPAeTA9rw1k9~FfzHA~GLLrqicPi5jiHQiqKK-QneZsrrDJlTMVp4cW0NNVgTZR4pL6UmjelAdefvJe5APOFqtppHyBjFx86xq2FpX0YQtdP5OsSdJ8U51wUYSKRzFrpouPYs58jWo7TX~1CfsrTRN6quvBOLZUptWu6mkWBMguf7W4ObbIimQ1NQMTSp~v1HkEU8GQMWVKVayo8Vz9qen8FUIThG4F0YvhO4roPz2eCcpUnRJ~C4IPNGyTfH6Afd5auGxqF-Lj7GrHVRcM5FTPZ4F3NrsE7VuSYw73JoNdB-lM6mxXkIDsDy58u7Xny28we5dcK5~XyHQ__'
  },
];

  onViewDetails(dorm: { name: any; }) {
    alert(`Viewing details for ${dorm.name}`);
  }
}

