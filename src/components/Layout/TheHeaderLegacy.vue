<template>
  <header>
    <div class="logo">Fitter</div>
    <div class="rs-header">
      <!-- <div class="help">{{ $t("message.help") }}?</div> -->
      <div class="locale-changer">
        <select class="bg-white" v-model="$i18n.locale">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
      <i class="material-icons"> menu </i>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rs-header {
  display: flex;
}

.help {
  margin-right: 20px;
}

.logo {
  font-weight: bold;
  text-align: center;
  width: 10em;
  padding: 10px 0px;
  border: 1px solid black;
  letter-spacing: 0.2em;
  @apply  ring-8 ring-inset;
}

.locale-changer {
  margin-right: 10px;
}
</style>