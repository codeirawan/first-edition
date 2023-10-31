<template>
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] px-6 lg:px-0 my-6">
    <HomeCard
      v-bind="{
        brand: 'Ferrari',
        type: '812 Superfast',
        price: 300000,
        thb: 12764000, 
        images: [
          'https://images.autofun.co.id/file1/8a39be46a2544b59ba3c82688edd153d_1608x906.jpg',
          'https://images.autofun.co.id/file1/f49c9a5747a942f5b6b2ae915acda34d_1608x906.jpg',
          'https://images.autofun.co.id/file1/c715e441d30c41369c768142d0e2ba6c_1608x906.jpg',
        ]
      }"
    />

    <HomeCard
      v-bind="{
        brand: 'KIA',
        type: 'ProCeed GT-Line',
        price: 200000,
        thb: 8764000,
        images: [
          'https://m.atcdn.co.uk/a/media/w800h600/8cac9d4988aa4c4196699f1cb758ef19.jpg',
          'https://m.atcdn.co.uk/a/media/w800h600/aecd6ce9326149c2ba2799e8e163e708.jpg',
          'https://m.atcdn.co.uk/a/media/w800h600/fc14196830074de9840b52ff7b759887.jpg',
        ]
      }"
    />

    <HomeCard
      v-bind="{
        brand: 'DB2',
        type: 'Aston Martin',
        price: 195000,
        thb: 7764000,
        images: [
          'https://m.atcdn.co.uk/a/media/w800h600/f1de10adb59e4a80ae288219ac31124d.jpg',
          'https://m.atcdn.co.uk/a/media/w800h600/60ad1d7f00104990bdd2ff3e6fb6a1db.jpg',
        ]
      }"
    />

    <HomeCard
      v-bind="{
        brand: 'Ford',
        type: '2023 Explorer ST-Line',
        price: 145000,
        thb: 5764000, 
        images: [
          'https://build.ford.com/dig/Ford/Explorer/2023/HD-TILE/Image%5B%7CFord%7CExplorer%7C2023%7C1%7C1.%7C250A...PUM..88A.896.86E.SRB.64W.65S.99H.61N.STL.%5D/EXT/1/vehicle.png',
          'https://build.ford.com/dig/Ford/Explorer/2023/HD-TILE/Image%5B%7CFord%7CExplorer%7C2023%7C1%7C1.%7C250A...PUM..88A.896.86E.SRB.64W.65S.99H.61N.STL.%5D/EXT/5/vehicle.png',
          'https://build.ford.com/dig/Ford/Explorer/2023/HD-TILE/Image%5B%7CFord%7CExplorer%7C2023%7C1%7C1.%7C250A...PUM..88A.896.86E.SRB.64W.65S.99H.61N.STL.%5D/INT/1/vehicle.png',
        ]
      }"
    />

    <HomeCard
      v-bind="{
        brand: 'Ferrari',
        type: '612 Scaglietti',
        price: 125000,
        thb: 4764000,
        images: [
          'https://otoblitz.net/wp-content/uploads/2018/05/2004-ferrari-612-scaglietti-01.jpg',
          'https://otoblitz.net/wp-content/uploads/2018/05/2004-ferrari-612-scaglietti-02.jpg',
          'https://otoblitz.net/wp-content/uploads/2018/05/2004-ferrari-612-scaglietti-05.jpg'
        ]
      }"
    />

    <HomeCard
      v-bind="{
        brand: 'Ford',
        type: 'Mustang GT Fastback',
        price: 95000,
        thb: 3764000, 
        images: [
          'https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/EXT/1/vehicle.png',
          'https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/EXT/2/vehicle.png',
          'https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/INT/1/vehicle.png',
        ]
      }"
    />
  </section>
</template>

<script setup>
</script>
