class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        this.audios[0] = "https://streamer.eagrpservices.com/audio/radiomars.mp3";
        this.audios[1] = "http://104.167.2.55:8000/;";
        this.audios[2] = "https://streamer.eagrpservices.com/audio/medradio.mp3";
        this.audios[3] = "https://streamer.eagrpservices.com/audio/chadafm.mp3";
        this.audios[4] = "https://live.medi1.com/medi1";
        this.audios[5] = "https://broadcast.ice.infomaniak.ch/aswat-high.mp3";
        this.audios[6] = "https://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3";
        this.audios[7] = "https://streamer.eagrpservices.com/audio/mfmradio.ogg";
        this.audios[8] = "https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3";
        this.audios[9] = "https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/radio_2m/radio_hls_ts_hy217612tge1f21j83/radio_2m.m3u8";
        this.audios[10] = "https://plainedge.ice.infomaniak.ch/radiosoleil-128.mp3";
        this.audios[11] = "https://soundcastedge.ice.infomaniak.ch/onlyrai-high.mp3";
        this.audios[12] = "https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/radio_chaine_inter/hls_snrt_radio/radio_chaine_inter-mp4a_130400_qad=1.m3u8";
        this.audios[13] = "https://av.voanews.com/clips/VLE/2022/10/04/20221004-003000-VLE122-program.mp3";
        this.audios[14] = "https://scdn.nrjaudio.fm/adwz1/ma/55820/mp3_128.mp3?origine=radio";
        this.audios[15] = "https://mgharba.ice.infomaniak.ch/mgharba-128.mp3";
        this.audios[16] = "https://dancefloor.ice.infomaniak.ch/dancefloor-128.mp3";
        this.audios[17] = "https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/radio_mohammed_6/hls_snrt_radio/radio_mohammed_6-mp4a_130400_qad=1.m3u8";
        this.audios[18] = "https://medinafm.ice.infomaniak.ch/medinafm-64.mp3";
        this.audios[19] = "https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/radio_idaa_watanya/hls_snrt_radio/radio_idaa_watanya-mp4a_130400_qad=1.m3u8";
        this.audios[20] = "https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/radio_amazigh/hls_snrt_radio/radio_amazigh-mp4a_130400_qad=1.m3u8";
        this.audios[21] = "https://manager8.streamradio.fr:1775/stream";
        this.audios[22] = "https://buzz.ice.infomaniak.ch/buzz-128.mp3";
        this.audios[23] = "https://gold.ice.infomaniak.ch/gold-128.mp3";
        
        /*
    
        this.names = [];
        this.names[0] = "Radio Mars";
        this.names[1] = "Quran";
        this.names[2] = "Med Radio";
        this.names[3] = "Chada Fm";
        this.names[4] = "Medi1";
        this.names[5] = "Radio Aswat";
        this.names[6] = "Hit Radio";
        this.names[7] = "Mfm Radio";
        this.names[8] = "Mc-Doualiya";
        this.names[9] = "2M";
        this.names[10] = "Radio soleil";
        this.names[11] = "Only ray";
        this.names[12] = "Chaine inter";
        this.names[13] = "Izlan fr";
        this.names[14] = "Nrj";
        this.names[15] = "Mgharba";
        this.names[16] = "Dancefloor";
        this.names[17] = "Mohammed 6";
        this.names[18] = "Medina FM";
        this.names[19] = "Idaa watanya";
        this.names[20] = "Radio amazigh";
        this.names[21] = "Star";
        this.names[22] = "Gold";
        
        */
        
        
     this.names = [];
     this.names[0] = `<img src="img/radiomars.jpeg" alt=""><p><i>Radio Mars</i></p>`;
     this.names[1] = `<img src="img/quran.jpeg" alt=""><p><i>Quran</i></p>`;
     this.names[2] = `<img src="img/medradio1.png" alt=""><p><i>Med Radio</i></p>`;
     this.names[3] = `<img src="img/chadafm.png" alt=""><p><i>Chada Fm</i></p>`;
     this.names[4] = `<img src="img/medi1.jpeg" alt=""><p><i>Medi1</i></p>`;
     this.names[5] = `<img src="img/aswat3.jpeg" alt=""><p><i>Radio Aswat</i></p>`;
     this.names[6] = `<img src="img/images.png" alt=""><p><i>Hit Radio</i></p>`;
     this.names[7] = `<img src="img/mfmradio.png" alt=""><p><i>Mfm Radio</i></p>`;
     this.names[8] = `<img src="img/mcd.png" alt=""><p><i>Mc-Doualiya</i></p>`;
     this.names[9] = `<img src="img/2M.jpeg" alt=""><p><i>2M</i></p>`;
     this.names[10] = `<img src="img/soleil.jpeg" alt=""><p><i>Radio soleil</i></p>`;
     this.names[11] = `<img src="img/only-rai.png" alt=""><p><i>Only ray</i></p>`;
     this.names[12] = `<img src="img/inter.png" alt=""><p><i>Chaine inter</i></p>`;
     this.names[13] = `<img src="img/300.png" alt=""><p><i>Learning English Broadcast - Voice of America</i></p>`;
     this.names[14] = `<img src="img/nrj.png" alt=""><p><i>Nrj</i></p>`;
     this.names[15] = `<img src="img/mgharba.jpeg" alt=""><p><i>Mgharba</i></p>`;
     this.names[16] = `<img src="img/dance1.jpeg" alt=""><p><i>Dancefloor</i></p>`;
     this.names[17] = `<img src="img/6.jpeg" alt=""><p><i>Mohammed 6</i></p>`;
     this.names[18] = `<img src="img/medina.jpeg" alt=""><p><i>Medina FM</i></p>`;
     this.names[19] = `<img src="img/watanya.png" alt=""><p><i>Idaa watanya</i></p>`;
     this.names[20] = `<img src="img/amazigh.png" alt=""><p><i>Radio amazigh</i></p>`;
     this.names[21] = `<img src="img/star.jpeg" alt=""><p><i>Star</i></p>`;
     this.names[22] = `<img src="img/buzz.jpeg" alt=""><p><i>Buzz</i></p>`;
     this.names[23] = `<img src="img/gold1.jpeg" alt=""><p><i>Gold</i></p>`;


this.numberAudio =0;


        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();