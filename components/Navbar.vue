<template>
    <div class="container mx-auto bg-base-100">
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between py-2 mx-auto px-4 lg:px-40 border-b opacity-75 backdrop-blur-sm" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="/" aria-label="logo" class="flex items-center">
                        <Logo />
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Abrir menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <ul class="menu menu-horizontal">
                        <li>
                            <NuxtLink to="/libros">Libros</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog">Blog</NuxtLink>
                        </li>
                        <Theme />

                    </ul>
                </div>
            </nav>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50" />
                <DialogPanel
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-base-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="/" aria-label="logo" class="flex items-center">
                            <Logo />
                        </a>
                        <button type="button" class="-m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
                            <span class="sr-only">Cerrar menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <ul class="menu menu-vertical">
                                    <p>
                                        Paginas
                                    </p>
                                    <li>
                                        <NuxtLink to="/libros">Libros</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/blog">Blog</NuxtLink>
                                    </li>
                                    <p>
                                        Tema
                                    </p>
                                    <ul class="menu menu-vertical">
                                        <li><button class="py-1" data-set-theme="light" data-act-class="ACTIVECLASS">Modo
                                                Claro</button></li>
                                        <li><button class="py-1" data-set-theme="dark" data-act-class="ACTIVECLASS">Modo
                                                Oscuro</button></li>
                                        <li><button class="py-1" data-set-theme="retro" data-act-class="ACTIVECLASS">Modo
                                                Sepia</button></li>
                                    </ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>

        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>

            <div class="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Libros', to: '/libros' },
    { name: 'Blog', to: '/blog' },
]

const mobileMenuOpen = ref(false)
</script>