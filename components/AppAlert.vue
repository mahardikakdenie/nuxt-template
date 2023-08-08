<script setup lang="ts">
import type { Ref } from "vue";

const useLocale = () =>
    useState<string>("locale", () => useDefaultLocale().value);

const useDefaultLocale = (fallback = "en-US") => {
    const locale = ref(fallback);
    if (process.server) {
        const reqLocale = useRequestHeaders()["accept-language"]?.split(",")[0];
        if (reqLocale) {
            locale.value = reqLocale;
        }
    } else if (process.client) {
        const navLang = navigator.language;
        if (navLang) {
            locale.value = navLang;
        }
    }
    return locale;
};

const useLocales = () => {
    const locale = useLocale();
    const locales = ref(["en-US", "en-GB", ..."ja-JP-u-ca-japanese"]);
    if (!locales.value.includes(locale.value)) {
        locales.value.unshift(locale.value);
    }
    return locales;
};

const useLocaleDate = (date: Ref<Date> | Date, locale = useLocale()) => {
    return computed(() =>
        new Intl.DateTimeFormat(locale.value, { dateStyle: "full" }).format(
            unref(date)
        )
    );
};
const counter = useState("counter", () => Math.round(Math.random() * 1000));

const locales = useLocales();
const locale = useLocale();
const date = useLocaleDate(new Date("2016-10-26"));
</script>

<template>
    <div class="p-5 flex justify-center">
        <div>
            <div>Counter: {{ counter }}</div>
            <div class="flex justify-center">
                <button
                    @click="counter++"
                    class="p-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                >
                    +
                </button>
                <button
                    @click="counter--"
                    class="p-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                >
                    -
                </button>
            </div>
        </div>
        <div>
            <h1>Nuxt birthday</h1>
            <p>{{ date }}</p>
            <label for="locale-chooser">Preview a different locale</label>
            <select id="locale-chooser" v-model="locale">
                <option v-for="locale of locales" :key="locale" :value="locale">
                    {{ locale }}
                </option>
            </select>
        </div>
    </div>
</template>