<template>
    <div>
        <h2>Character creation. </h2>
        <strong>Your character's level is {{ level }}.</strong> <br>
        <strong>You wasted {{ wastedPoints }} skill point<span v-show="wastedPoints > 1">s</span>.</strong>
        <p class="col-lg-6 col-md-12">
            You have to upgrade your skills in linear order, which means
            you cannot increase you defence bigger than attack, buff bigger
            than defence, etc. But health and speed modifiers are exceptions
            of this rule. The only rule for this two is to be equal or lesser
            than attack level.
        </p>
        <div>
            <button class="btn btn-danger"
                    v-on:click="selectClass"
            >
                Fire mage
            </button>
            <button class="btn btn-primary"
                    v-on:click="characterClass = this.target.innerText"
            >
                Water mage
            </button>
            <button class="btn btn-success"
                    v-on:click="characterClass = this.target.innerText"
            >
                Earth mage
            </button>
            <button class="btn btn-light"
                    v-on:click="characterClass = this.target.innerText"
            >
                Wind mage
            </button>
        </div>
        <div>
            {{ characterClass }}
        </div>
        <div class="row">
            <div class="col-sm-4 col-lg-2 ">
                Attack:
            </div>
            <div class="col-sm-8 col-lg-2  buttons">
                <button class="btn"
                        v-bind:disabled="attack === 1 || attack === defence
                        || attack === health || attack === speed "
                        v-on:click="attack--"
                >-</button>
                <label class="value">{{ attack }} </label>
                <button class="btn"
                        v-bind:disabled="attack === 3 || attack > buff "
                        v-on:click="attack++"
                >+</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-lg-2 ">
                Defence:
            </div>
            <div class="col-sm-8 col-lg-2  buttons">
                <button class="btn"
                        v-bind:disabled="defence === 0 || defence === buff"
                        v-on:click="defence--"
                >-</button>
                <label class="value">{{ defence }} </label>
                <button class="btn"
                        v-bind:disabled="defence === 3 || defence === attack || defence > buff "
                        v-on:click="defence++"
                >+</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-lg-2 ">
                Buff:
            </div>
            <div class="col-sm-8 col-lg-2  buttons">
                <button class="btn"
                        v-bind:disabled="buff === 0 || (buff < defence || buff < attack)"
                        v-on:click="buff--"
                >-</button>
                <label class="value">{{ buff }} </label>
                <button class="btn"
                        v-bind:disabled="buff === 3 || buff === defence  "
                        v-on:click="buff++"
                >+</button>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm-4 col-lg-2 ">
                Health mod:
            </div>
            <div class="col-sm-8 col-lg-2  buttons">
                <button class="btn"
                        v-bind:disabled="health === 0"
                        v-on:click="health--"
                >-</button>
                <label class="value">{{ health }} </label>
                <button class="btn"
                        v-bind:disabled="health === 3 || health === attack  "
                        v-on:click="health++"
                >+</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-lg-2 ">
                Speed mod:
            </div>
            <div class="col-sm-8 col-lg-2  buttons">
                <button class="btn"
                        v-bind:disabled="speed === 0"
                        v-on:click="speed--"
                >-</button>
                <label class="value">{{ speed }} </label>
                <button class="btn"
                        v-bind:disabled="speed === 3 || speed === attack  "
                        v-on:click="speed++"
                >+</button>
            </div>
        </div>
        <div>
            <button class="btn btn-success" type="submit">Submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data () {
            return {
                characterClass: '',
                attack: 1,
                defence: 0,
                buff: 0,
                health: 0,
                speed: 0
            }
        },
        computed: {
            level () {
                let result = 0;
                let stats = [this.attack, this.defence, this.buff];
                for (let i = 0; i < stats.length; i++ ) {
                    for (let l = 1; stats[i] > 0; stats[i]--, l++) {
                        result += l;
                    }
                }
                return result;
            },
            wastedPoints () {
                let result = 0;
                let stats = [this.attack, this.defence, this.buff, this.health, this.speed];
                for (let i = 0; i < stats.length; i++ ) {
                    for (let l = 1; stats[i] > 0; stats[i]--, l++) {
                        result += l;
                    }
                }
                return result;
            }
        },
        methods : {
            selectClass (event) {
                this.characterClass = event;
            }
        }
    }
</script>

<style scoped>
    * {
        font-size: 22px;
    }
    h2 {
        font-size: 28px;
    }
    .buttons {
        vertical-align: top;
    }
    button {
        font-size: 12px;
    }
    .value {
        margin: 0 10px;
    }
    hr {
        margin: 0.5rem 0;
    }

</style>