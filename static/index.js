var app = new Vue({
  el: '#app',
  data: {
    loginedInUser: null,
    username: '',
    password: '',
    sportsTypes: [
      {
        type: 'Jet Ski',
        desc: 'Proident sed aliquam, condimenttesque placerat in a. quae placerat prat fusce amet non susdisse interdum',
        img: '1.jpg',
      },
      {
        type: 'Surfing',
        desc: 'Proident sed aliquam, condimenttesque placerat in a. quae placerat prat fusce amet non susdisse interdum',
        img: '2.jpg',
      },
      {
        type: 'Parasailing',
        desc: 'Proident sed aliquam, condimenttesque placerat in a. quae placerat prat fusce amet non susdisse interdum',
        img: '3.jpg',
      },
      {
        type: 'Scuba Drive',
        desc: 'Proident sed aliquam, condimenttesque placerat in a. quae placerat prat fusce amet non susdisse interdum',
        img: '4.jpg',
      },
      {
        type: 'Flyboard Flying',
        desc: 'Proident sed aliquam, condimenttesque placerat in a. quae placerat prat fusce amet non susdisse interdum',
        img: '5.jpg',
      },
      {
        type: 'Sea Walking',
        desc: 'Proident sed aliquam, condimenttesque placerat in a. quae placerat prat fusce amet non susdisse interdum',
        img: '6.jpg',
      },
    ],
  },
  mounted() {
    let user;
    if (user = localStorage.getItem('loginedInUser')) {
      this.loginedInUser = JSON.parse(user);
      this.getSportsList();
    }
  },
  methods: {
    getSportsList() {
      $.get('/sportsType', (data) => {
        this.sportsTypes = data;
      })
        .error((e) => {
          alert(e.responseJSON.msg)
        })
    },
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };

      $.ajax({
        url:'/login',
        type: 'post',
        data: JSON.stringify(data),
        contentType:'application/json',
        dataType:'json',
        success:(data) => {
          localStorage.setItem('loginedInUser', JSON.stringify(data.data))
          this.loginedInUser = data.data;
          this.getSportsList();
          this.username = '';
          this.password = '';
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }
})
