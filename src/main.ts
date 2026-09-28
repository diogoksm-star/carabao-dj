/// <reference types="@workadventure/iframe-api-typings" />

export default {
    run: async () => {
        console.log("DJ CARABAO iniciado");

        WA.player.meetings.onJoin().subscribe(async (meeting) => {
            console.log("DJ entrou em uma reunião");

            await meeting.playSound(
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            );
        });
    }
};
