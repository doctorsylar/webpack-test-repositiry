<template>
  <div id="app">
    <h2>Registration:</h2>
    <form action="/server_page" target="_self" method="post">
      <div class="form-group">
        <label>
          Username:
          <input class="form-control"
                 v-bind:class="(usernameAdviceClass !== 'okay') ? 'wrong-input' : null"
                 type="text"
                 v-model="username"
                 placeholder="Username..."
          >
          <label class="advice"
            v-bind:class="usernameAdviceClass"
          >{{ usernameAdvice }}</label>
        </label>
      </div>
      <div class="form-group">
        <label>
          Password:
          <input class="form-control"
                 v-bind:class="(passwordAdviceClass !== 'okay') ? 'wrong-input' : null"
                 type="password"
                 v-model="password"
                 placeholder="Password..."
          >
          <label class="advice"
                 v-bind:class="passwordAdviceClass"
          >{{ passwordAdvice }}</label>
        </label>
      </div>
        <button type="submit"
                class="btn btn-primary"
                v-bind:disabled="!dataValid"
        >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text: '',
      username: '',
      password: ''
    }
  },
  computed: {
    reversed () {
      if (this.text !== '') {
        return this.text.split('').reverse().join('');
      }
      else {
        return '';
      }
    },
    usernameAdvice () {
      let name = this.username;
      if (name.length < 6) {
        return 'Имя персонажа должно быть больше 6 символов'
      }
      else if (name.length > 12) {
        return 'Имя персонажа не может превышать 12 символов'
      }
      else if (name.split('').indexOf(' ') !== -1) {
        return 'Имя персонажа не должно содержать пробелов'
      }
      else {
        return 'It is okay';
      }
    },
    usernameAdviceClass () {
      if (this.usernameAdvice === 'It is okay') {
        return 'okay';
      }
      else {
        return 'wrong-advice';
      }
    },
    passwordAdvice () {
      let password = this.password;
      if (password.length < 6) {
        return 'Ваш пароль должен быть больше 6 символов'
      }
      else if (password.length > 12) {
        return 'Ваш пароль не может превышать 12 символов'
      }
      else if (password.split('').indexOf(' ') !== -1) {
        return 'Ваш пароль не должен содержать пробелов'
      }
      else {
        return 'It is okay';
      }
    },
    passwordAdviceClass () {
      if (this.passwordAdvice === 'It is okay') {
        return 'okay';
      }
      else {
        return 'wrong-advice';
      }
    },
      dataValid () {
        return (this.usernameAdviceClass === 'okay'
            && this.passwordAdviceClass === 'okay');
      }


  }
}
</script>

<style>
    * {
        box-shadow: none !important;
    }
    .advice {
      font-size: 12px;
    }
    .form-group .form-control[class~=wrong-input] {
        border-color: darkred;
    }
    .wrong-advice {
      color: darkred;
    }
    .okay {
      color: darkgreen;
    }
    .btn:disabled {
        cursor: no-drop;
    }

</style>
