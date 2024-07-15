<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <div class="window">
        <div class="main-container">
            <img class="mount"src="../../public/mounted.png" alt="">
            <div class="link-cont">
                <img src="../../public/telegram-icon.svg" alt="">
                <h2>Привязка Telegram</h2>
                <div class="link-good">
                    <p class="text-def">Телеграм @kinestrik привязан к вашему аккаунту.</p>
                </div>
                <div class="btns">
                    <button class="bt more"><p class="text-def">Подробнее</p></button>
                    <button class="bt next"><p class="text-def">Далее</p></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.window {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ECEDEE;

    width: 100%;
    height: 100vh;
}

.main-container {
    display: flex;
    justify-content: space-between;

    align-items: center;
    width: 1545px;
    height: 915px;
    background-color: #ffffff;
    border-radius: 50px;
    padding: 0;
    position: relative;
}

.mount {
    /* position: absolute; */
    width: 702px;
    height: 916px;
}

.link-cont {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 916px;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.link-cont h2 {
    font-size: 70px;
    font-weight: bold;
    user-select: none;
}

.link-good {
    width: 685px;
    height: 140px;
    background-color: #EAE9E9;
    border-radius: 15px;

    padding: 27px 23px 27px 23px;
}

.text-def {
    font-size: 37px;
    font-weight: bold;
    line-height: 44px;
    margin: 0;
    color: #212529;
}

.bt {
    width: 328px;
    height: 78px;
    border-radius: 15px;
    background-color: #EAE9E9;
    border: none;
    
    transition: all 100ms;
}

.bt:hover {
    background-color: #cfcfcf;
}

.bt:active {
    background-color: #a5a5a5;
}

.btns {
    display: flex;
    flex-direction: row;
    gap: 40px;
}
</style>