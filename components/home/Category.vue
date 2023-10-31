<template>
    <section class="py-6 bg-gray-100">
        <h1 class="container mx-auto px-5 lg:px-0 mt-5 text-2xl font-semibold">Inspiration for future getaways</h1>
        <div class="container mx-auto px-5 lg:px-0 border-b border-gray-200">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" role="tablist">
                <li class="-ml-4" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg"
                        :class="{ 'font-semibold': activeTab === 'popular' }" id="popular-tab" data-tabs-target="#popular"
                        type="button" role="tab" aria-controls="popular" :aria-selected="activeTab === 'popular'"
                        @click="changeTab('popular')">Popular</button>
                </li>
                <li role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-800 dark:hover:text-gray-800"
                        :class="{ 'font-semibold': activeTab === 'artsCulture' }" id="artsCulture-tab"
                        data-tabs-target="#artsCulture" type="button" role="tab" aria-controls="artsCulture"
                        :aria-selected="activeTab === 'artsCulture'" @click="changeTab('artsCulture')">Arts &
                        Culture</button>
                </li>
                <li role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-800 dark:hover:text-gray-800"
                        :class="{ 'font-semibold': activeTab === 'outdoor' }" id="outdoor-tab" data-tabs-target="#outdoor"
                        type="button" role="tab" aria-controls="outdoor" :aria-selected="activeTab === 'outdoor'"
                        @click="changeTab('outdoor')">Outdoor</button>
                </li>
                <li role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-800 dark:hover:text-gray-800"
                        :class="{ 'font-semibold': activeTab === 'mountains' }" id="mountains-tab"
                        data-tabs-target="#mountains" type="button" role="tab" aria-controls="mountains"
                        :aria-selected="activeTab === 'mountains'" @click="changeTab('mountains')">Mountains</button>
                </li>
            </ul>
        </div>
        <div class="container mx-auto px-5 lg:px-0 text-left" id="myTabContent">
            <div v-if="activeTab === 'popular'" class="-ml-4 rounded-lg" id="popular" role="tabpanel"
                aria-labelledby="popular-tab">
                <!-- Content for the 'Popular' tab -->
                <ul class="grid grid-cols-2 lg:grid-cols-6 gap-4">
                    <!-- Generate random name-description pairs for each li element -->
                    <li v-for="(pair, index) in generateRandomPairs(18)" :key="index" class="p-4 rounded-md">
                        <a :href="pair.url">
                            <div class="font-semibold">{{ pair.name }}</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">{{ pair.description }}</div>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Content for the 'Arts & Culture' tab -->
            <div v-if="activeTab === 'artsCulture'" class="-ml-4 rounded-lg" id="artsCulture" role="tabpanel"
                aria-labelledby="artsCulture-tab">
                <ul class="grid grid-cols-2 lg:grid-cols-6 gap-4">
                    <!-- Generate content for this tab -->
                    <li v-for="(pair, index) in generateRandomPairs(18)" :key="index" class="p-4 rounded-md">
                        <a :href="pair.url">
                            <div class="font-semibold">{{ pair.name }}</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">{{ pair.description }}</div>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Content for the 'Outdoor' tab -->
            <div v-if="activeTab === 'outdoor'" class="-ml-4 rounded-lg" id="outdoor" role="tabpanel"
                aria-labelledby="outdoor-tab">
                <ul class="grid grid-cols-2 lg:grid-cols-6 gap-4">
                    <!-- Generate content for this tab -->
                    <li v-for="(pair, index) in generateRandomPairs(18)" :key="index" class="p-4 rounded-md">
        <a :href="pair.url">
          <div class="font-semibold">{{ pair.name }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">{{ pair.description }}</div>
        </a>
      </li>
                </ul>
            </div>

            <!-- Content for the 'Mountains' tab -->
            <div v-if="activeTab === 'mountains'" class="-ml-4 rounded-lg" id="mountains" role="tabpanel"
                aria-labelledby="mountains-tab">
                <ul class="grid grid-cols-2 lg:grid-cols-6 gap-4">
                    <!-- Generate content for this tab -->
                    <li v-for="(pair, index) in generateRandomPairs(18)" :key="index" class="p-4 rounded-md">
        <a :href="pair.url">
          <div class="font-semibold">{{ pair.name }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">{{ pair.description }}</div>
        </a>
      </li>
                </ul>
            </div>

            <!-- Other tab content sections can be added similarly -->
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'popular',
        };
    },
    methods: {
        changeTab(tabName) {
            this.activeTab = tabName;
        },
        generateRandomPairs(count) {
            // Array of random names and descriptions (you can replace this with your data source)
            const randomPairs = [
                { name: 'Item 1', description: 'Description 1', url: 'https://example.com/1' },
                { name: 'Item 2', description: 'Description 2', url: 'https://example.com/2' },
                { name: 'Item 3', description: 'Description 3', url: 'https://example.com/3' },
                { name: 'Item 4', description: 'Description 4', url: 'https://example.com/4' },
                { name: 'Item 5', description: 'Description 5', url: 'https://example.com/5' },
                { name: 'Item 6', description: 'Description 6', url: 'https://example.com/6' },
                { name: 'Item 7', description: 'Description 7', url: 'https://example.com/7' },
                { name: 'Item 8', description: 'Description 8', url: 'https://example.com/8' },
                { name: 'Item 9', description: 'Description 9', url: 'https://example.com/9' },
                { name: 'Item 10', description: 'Description 10', url: 'https://example.com/10' },
                { name: 'Item 11', description: 'Description 11', url: 'https://example.com/11' },
                { name: 'Item 12', description: 'Description 12', url: 'https://example.com/12' },
                { name: 'Item 13', description: 'Description 13', url: 'https://example.com/13' },
                { name: 'Item 14', description: 'Description 14', url: 'https://example.com/14' },
                { name: 'Item 15', description: 'Description 15', url: 'https://example.com/15' },
                { name: 'Item 16', description: 'Description 16', url: 'https://example.com/16' },
                { name: 'Item 17', description: 'Description 17', url: 'https://example.com/17' },
                { name: 'Item 18', description: 'Description 18', url: 'https://example.com/18' },
                // Add more pairs as needed with appropriate URLs
            ];

            // Shuffle the array to make the selection random
            for (let i = randomPairs.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [randomPairs[i], randomPairs[j]] = [randomPairs[j], randomPairs[i]];
            }

            // Return a slice of the shuffled array with the desired count
            return randomPairs.slice(0, count);
        },
    },
};
</script>
