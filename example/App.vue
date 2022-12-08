<template>
  <div id="app">
    <section class="main-navbar-section mb-5">
      <div class="container">
        <index :options="navbarOptions" @vnb-item-clicked="vnbItemClicked">
        </index>
      </div>
    </section>

    <section class="">
        <div class="text-left font-weight-bold disposition-text">
          <div class="title">Each Design Has its <br/> Own Philosophical <br/> Meaning</div>
          <div class="sub-title">
            <p>Each property design has its own meaning and we are ready to <br/> help you to get a property according to your taste. <br/> 
            let's discuss soon.
            </p>
          </div>
        </div>
        <div class="text-right disposition-image"><img src="https://via.placeholder.com/800x800.png"/> </div>
    </section>
    <section class="col-12 mt-5 title " >
      <div class="text-center font-weight-bold">Why should Choose Our</div>
      <div class="text-center mb-5">
        <img src="https://via.placeholder.com/1450x200.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"/>
      </div>
    </section>
  </div>
</template>

<script>
import brandImage from '../src/assets/images/lockup-color.png'

export default {
  name: 'app',
  data () {
    return {
      navbarOptions: {

        menuOptionsLeft: [
          {
            type: 'link',
            text: 'Gubukuh',
            arrowColor: '#659CC8',
          },
          {
            type: 'link',
            text: 'Home',
          },
          {
            type: 'link',
            text: 'Products',
          },
          {
            type: 'link',
            text: 'About Us',
          },
          {
            type: 'link',
            text: 'Support',
          },
        ],
        menuOptionsRight: [
          {
            type: 'button',
            text: 'Login',
            path: {name: 'signup'},
            class: 'button-red',
          },
          {
            type: 'button',
            text: 'Sign Up',
            path: {name: 'login'},
          },
        ],
      },
    };
  },
  methods: {
    vnbItemClicked (text) {
      if (text === 'About') {
        alert("'About' was selected.");
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700");

html {
  width: 100%;
  font-size: 18px;
  color: #333;
}

body {
  margin: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  font-family: "Montserrat", sans-serif;
}

#app {
  height: 100%;
  height: 100vh;
  width: 100%;
  line-height: 1.5;
}

.code-text {
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}

.btn {
  text-transform: uppercase;
  font-weight: bold;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

.main-content-section {
  padding: 45px 0;
  background: #eee;
  min-height: 100%;
}

//
// index customization below
//

.main-navbar-section {
  background: #fff;
}

.vnb {
  font-family: "Montserrat", sans-serif;

  @media (min-width: 992px) {
    .button-red {
      background: white;
      color: blue;

      &:hover {
        background: darken(#ff3b30, 10%);
      }
    }
  }

  &__menu-options {
    &__option {
      &__button {
        &__icon {
          svg {
            margin-top: -3px;
          }
        }
      }
    }
  }

  &__popup {
    &__bottom {
      &__menu-options {
        &__option {
          &__link {
            &__icon {
              svg {
                margin-top: -4px;
              }
            }
          }
        }
      }
    }
  }

  .custom-section-content {
    width: 100%;

    @media (min-width: 568px) {
      width: 50%;
    }

    @media (min-width: 992px) {
      width: 15%;
    }

    @media (min-width: 1200px) {
      width: 20%;
    }
  }
}
</style>
