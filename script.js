:root {
  --background-rgb: 29 30 34;
  
  --blue-rgb: 33 150 243;
  --primary-rgb: var(--blue-rgb);
  
  --blob-color-1: rgb(var(--blue-rgb));
  --blob-color-2: dodgerblue;
}

* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: rgb(var(--background-rgb));
  margin: 0rem;
  overflow: hidden;
}

.screen {
  width: 500px;
  display: flex;
  border: 3px solid rgb(var(--primary-rgb) / 80%);
  aspect-ratio: 10 / 16;
  border-radius: 1rem;
  background-color: rgb(var(--primary-rgb) / 15%);
  overflow: hidden;
  position: relative;
  z-index: 10;
}

.screen:after,
.screen:before {
  content: "";
  height: 5px;
  position: absolute;
  z-index: 4;
  left: 50%;
  translate: -50% 0%;
  background-color: white;
}

.screen:before {
  width: 15%;
  top: 0rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.screen:after {
  width: 25%;
  bottom: 0rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

@keyframes pan-overlay {
  from {
    background-position: 0% 0%;
  }
  
  to {
    background-position: 0% -100%;
  }
}

.screen-overlay {    
  background: linear-gradient(
    rgb(var(--primary-rgb) / 0.15),
    rgb(var(--primary-rgb) / 0.15) 3px,
    transparent 3px,
    transparent 9px
  );
  background-size: 100% 9px;
  height: 100%;
  width: 100%;
  animation: pan-overlay 22s infinite linear;
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;
}

@keyframes pan-image {  
  0% {
    background-position: 0% 100%;
    background-size: 200%;
  }

  50% {
    background-position: 100% 0%;
    background-size: 200%;
  }

  100% {
    background-position: 0% 100%;
    background-size: 200%;
  }
}

.screen > .screen-image {
  background-image: url("https://media.discordapp.net/attachments/1059672578777686056/1076522507798052994/Agesh_Tired_sleepy_teenage_male_with_long_hair_e18a6803-53c3-4eef-b489-1e7114fc6935.png?width=466&height=700");
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0px;
  background-size: 300%;
  background-position: 0% 0%;
  filter: sepia(100%) hue-rotate(160deg);
  opacity: 0.6;
  animation: pan-image 15s linear infinite;
}

.screen > .screen-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 4rem;
  position: relative;
  z-index: 3;
  margin: 1rem;
  padding-bottom: 6rem;
  border: 1px solid rgb(var(--primary-rgb) / 50%);
  border-radius: 0.6rem;
}

.screen > .screen-content > .screen-icon {
  color: white;
  font-size: 4rem;
  text-shadow: 0px 0px 0.5rem white;
}

.screen > .screen-content > .screen-user{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.screen > .screen-content > .screen-user:before,
.screen > .screen-content > .screen-user:after {
  content: "";
  position: absolute;
  top: 0px;
  background-color: rgb(var(--primary-rgb));
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 3px rgb(var(--primary-rgb) / 60%);
}

.screen > .screen-content > .screen-user:before {
  height: 2px;
  width: 50px;
  translate: -20px -1rem;
  opacity: 0.75;
}

.screen > .screen-content > .screen-user:after {
  height: 3px;
  width: 30px;
  translate: 26px calc(-1rem - 0.5px);
}

.screen > .screen-content > .screen-user > :is(.name, .link) {
  font-family: "Source Code Pro", monospace;
  color: white; 
  text-align: center;
  text-transform: uppercase; 
}

.screen > .screen-content > .screen-user > .name {
  position: relative;
  font-size: 4.25rem;
  font-weight: 400;
}

.screen > .screen-content > .screen-user > .name:before,
.screen > .screen-content > .screen-user > .name:after {
  content: "";
  height: 4px;
  width: 4px;
  position: absolute;
  border: 2px solid white;
  border-radius: 2px;
}

.screen > .screen-content > .screen-user > .name:before {
  top: 55%;
  right: -1.5rem;
}

.screen > .screen-content > .screen-user > .name:after {
  top: 45%;
  left: -1.5rem;  
}

.screen > .screen-content > .screen-user > .link {  
  opacity: 0.8;
  font-size: 1.5rem;
  text-shadow: 0px 0px 0.5rem white;
  font-weight: 400;
  letter-spacing: 0.3rem;
  text-decoration: none;
}

.screen > .screen-content > .screen-user > .link:is(:hover, :focus) {  
  text-decoration: underline; 
}

@media(max-width: 700px) {
  .screen {
    scale: 0.6;
    margin-bottom: 0rem;
  }
}

/* -- Blob effect -- */

@keyframes rotate {
  from {
    rotate: 0deg;
  }
  
  50% {
    scale: 1 1.5;
  }
  
  to {
    rotate: 360deg;
  }
}

#blob {
  background-color: white;
  height: 34vmax;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(to right, var(--blob-color-1), var(--blob-color-2));
  animation: rotate 20s infinite;
  opacity: 0.5;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(12vmax);
}

/* -- Links -- */

#links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  padding: 1rem;
}

.meta-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-link > :is(span, a) {
  font-family: "Rubik", sans-serif;
  font-size: 0.9rem;
  color: white;
}

.meta-link > .label {
  width: 160px; 
  text-align: right;
}

.meta-link > a {
  text-decoration: none;
  outline: none;
}

.meta-link > a.source {
  color: rgb(94, 106, 210);
}

.meta-link > a:is(:hover, :focus) > i {
  color: white;  
}

.meta-link > a.youtube {
  color: rgb(239, 83, 80);
}

.meta-link > a.youtube > i {
  padding-top: 0.2rem; 
}

.meta-link > a > i {
  height: 1rem;
  line-height: 1rem;
}

/* Disable glow effect on phones */
@media only screen and (max-width: 767px) {
  button:focus {
    outline: none;
  }
}

/* Zoom in on phones */
@media only screen and (max-width: 767px) {
  body {
    zoom: 150%;
  }
}
