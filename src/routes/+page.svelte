<script lang="ts">
	import VignetteAuto from '../lib/vignette.svelte';
	import Cursor from "$lib/cursor.svelte";
	import Spinner from "$lib/spinner.svelte";
  import Step from "$lib/step.svelte";
	import VignetteManual from '$lib/vignette-manual.svelte';
  let current = 0;

  function next() {
    current++;
  }

  function prev() {
    current--;
  }

  let el: HTMLElement;
</script>

<Cursor />
<Spinner left={1600} top={450}>
  <img class="spinner" width="30px" src='star.svg' alt='star' />
</Spinner>
<Spinner left={200} top={450}>
  <img class="spinner" width="40px" src='gear.svg' alt='gear' />
</Spinner>
<main class="min-h-screen transition-all">
  <div class="mx-auto w-8/12 relative flex-around">
    <Step from={0} to={0} {current}>
      <div class='title pt-80 flex flex-col items-center'>
        <h1 class="text-8xl">The State Manager at Home</h1>
        <h2 class="text-4xl mt-8">Angular Reactive Forms</h2>
      </div>
    </Step>
    <Step from={1} to={1} {current}>
      <div class='title pt-60 flex flex-col items-center'>
        <h1 class="text-8xl">The goals</h1>
        <div>
          <h2 class="text-4xl mt-8">1. general reactive form features</h2>
          <h2 class="text-4xl mt-8">2. new features since angular 14</h2>
          <h2 class="text-4xl mt-8">3. my new approach to forms</h2>
          <h2 class="text-4xl mt-8">4. common form pitfalls</h2>
          <h2 class="text-4xl mt-8">5. pros and cons of the approach</h2>
        </div>
      </div>
    </Step>
    <Step from={2} to={2} {current}>
      <img width="100%" src='app-comp-form.png' alt='app component form builder'/>
    </Step>
    <Step from={3} to={4} {current}>
      <img width="100%" src='app-comp-form.png' alt='app component form builder'/>
      <Step from={3} to={3} {current}>
        <VignetteManual left={510} top={235} bottom={453} right={1500} />
      </Step>
      <Step from={4} to={4} {current}>
        <VignetteManual left={510} top={453} bottom={750} right={1500} />
      </Step>
    </Step>
    
    <Step from={5} to={5} {current}>
      <img class='hide-away' src='app-comp-hide-away.png' alt='form structure similar to ngrx store'/>
    </Step>

    <!-- app comp form group -->
    <Step from={6} to={7} {current}>
      <img width="100%" class="pt-64" src='app-comp-form-template.png' alt='app component template'/>
      <Step from={7} to={7} {current}>
        <VignetteManual left={730} top={470} bottom={510} right={1130} />
      </Step>
    </Step>
    <!-- profile comp and control container error -->
    <Step from={8} to={8} {current}>
      <img width="100%" class="pt-32" src='profile-comp-cc.png' alt='profile component control container usage'/>
    </Step>
    <Step from={9} to={9} {current}>
      <img width="1600px" class="pt-40" src='cc-injection-error.jpg' alt='control container injection context missing error'/>
    </Step>
    <Step from={10} to={10} {current}>
      <img width="100%" class="pt-32" src='profile-comp-cc.png' alt='profile component control container usage'/>
      <Step from={10} to={10} {current}>
        <VignetteManual left={565} top={415} bottom={455} right={1360} />
      </Step>
    </Step>
    <Step from={11} to={12} {current}>
      <img width="100%" class="pt-32" src='profile-comp-cc.png' alt='profile component control container usage'/>
      <Step from={11} to={11} {current}>
        <VignetteManual left={565} top={455} bottom={495} right={1430} />
      </Step>
      <Step from={12} to={12} {current}>
        <VignetteManual left={565} top={495} bottom={535} right={1430} />
      </Step>
    </Step>
    <!-- profile component template -->
    <Step from={13} to={18} {current}>
      <img width="100%" class="pt-4" src='profile-comp-cc-template.png' alt='profile form control bindings'/>
      <Step from={14} to={14} {current}>
        <VignetteManual left={700} top={190} bottom={230} right={1025} />
      </Step>
      <Step from={15} to={15} {current}>
        <VignetteManual left={630} top={270} bottom={420} right={1350} />
      </Step>
      <Step from={16} to={16} {current}>
        <VignetteManual left={630} top={460} bottom={610} right={1350} />
      </Step>
      <Step from={17} to={17} {current}>
        <VignetteManual left={630} top={650} bottom={800} right={1370} />
      </Step>
    </Step>
    <!-- profile component with formGroupName -->
    <Step from={19} to={19} {current}>
      <img width="100%" class="pt-4" src='profile-comp-cc-template-formGroupName.png' alt='profile form group with name binding'/>
      <Step from={19} to={19} {current}>
        <VignetteManual left={690} top={190} bottom={230} right={1055} />
      </Step>
    </Step>

    <!-- project component -->
    <Step from={20} to={21} {current}>
      <img width="100%" class="pt-4" src='project-comp-cc.png' alt='project control container'/>
      <Step from={21} to={21} {current}>
        <VignetteManual left={550} top={345} bottom={380} right={1440} />
      </Step>
    </Step>
    <!-- project component template -->
    <Step from={22} to={26} {current}>
      <img width="100%" class="pt-32" src='project-comp-cc-template.png' alt='project form array name'/>
      <Step from={23} to={23} {current}>
        <VignetteManual left={500} top={255} bottom={285} right={700} />
      </Step>
      <Step from={24} to={24} {current}>
        <VignetteManual left={620} top={305} bottom={335} right={1511} />
      </Step>
      <Step from={25} to={25} {current}>
        <VignetteManual left={543} top={333} bottom={365} right={766} />
      </Step>
      <Step from={26} to={26} {current}>
        <VignetteManual left={511} top={365} bottom={580} right={1040} />
      </Step>
    </Step>

    <!-- pro cons after original stop -->
    <Step from={27} to={27} {current}>
      <div class='title pt-80 flex flex-col items-center'>
        <h1 class="text-8xl">Pros and Cons #1</h1>
        <h2 class="text-4xl mt-8">Pro: Your form data isn't unload when you navigate away</h2>
        <h2 class="text-4xl mt-8">Con: Your form data isn't unload when you navigate away</h2>
      </div>
    </Step>

    <Step from={28} to={28} {current}>
      <div class='title pt-80 flex flex-col items-center'>
        <h1 class="text-8xl">Pros and Cons #2</h1>
        <h2 class="text-4xl mt-8">Pro: Your components are a lot cleaner</h2>
        <h2 class="text-4xl mt-8">Con: You gain a few more services</h2>
      </div>
    </Step>

    <Step from={29} to={29} {current}>
      <div class='title pt-80 flex flex-col items-center'>
        <h1 class="text-8xl">Pros and Cons #3</h1>
        <h2 class="text-4xl mt-8">Pro: Your business logic is away from the components</h2>
        <h2 class="text-4xl mt-8">Con: You may have trouble coordinating some actions</h2>
        <h3 class="text-2xl mt-8">Components are for presentation Logic</h3>
        <h3 class="text-2xl mt-8">Services are for business logic</h3>
      </div>
    </Step>

    <Step from={30} to={30} {current}>
      <div class='title pt-80 flex flex-col items-center'>
        <h1 class="text-8xl">Pros and Cons #4</h1>
        <h2 class="text-4xl mt-8">Pro: You're free to re-architect</h2>
        <h2 class="text-4xl mt-8">Con: Your form controls could be anywhere...</h2>
      </div>
    </Step>

    <Step from={31} to={31} {current}>
      <div class='title pt-80 flex flex-col items-center'>
        <h1 class="text-8xl">Pitfalls</h1>
        <h2 class="text-4xl mt-8">Just because you can, doesn't means you should</h2>
        <h2 class="text-4xl mt-8">A lot of issues that arise</h2>
      </div>
    </Step>

    <Step from={32} to={32} {current}>
      <div class='title pt-80 flex flex-col items-center'>
        <h1 class="text-8xl">Pitfalls</h1>
        <h2 class="text-4xl mt-8">Dynamic Form Construction with Components</h2>
      </div>
    </Step>
  
    <Step from={33} to={33} {current}>
      <div class='title pt-20 flex flex-col items-center'>
        <img src='step-nono.png' alt='dont do this'/>
      </div>
    </Step>
    
    <Step from={34} to={34} {current}>
      <div class='title pt-10 flex flex-col items-center'>
        <img src='nono.png' alt='dont do this!!'/>
      </div>
    </Step>
    
    <Step from={35} to={35} {current}>
      <div class='title pt-80 flex flex-col items-center'>
        <h1 data-testid="test" class="text-8xl">It wasn't suppose to be...</h1>
        <h2 class="text-4xl mt-8">Because of the Deep Dive</h2>
        <h2 class="text-4xl mt-8">I can finally make sense of it all</h2>
        <h2 bind:this={el} class="text-4xl mt-8">I might even find Karl</h2>
        <!-- <VignetteAuto element={el}></VignetteAuto> -->
      </div>
    </Step>

    <Step from={36} to={36} {current}>
      <div class='title pt-80 flex flex-col items-center'>
        <h1 data-testid="dead" class="text-8xl">Resurrecting the dead (form)</h1>
        <h2 class="text-4xl mt-8">In the middle of a huge refactor</h2>
        <h2 class="text-4xl mt-8">4700 line of code</h2>
        <h2 class="text-4xl mt-8">6 child forms</h2>
        <h2 class="text-4xl mt-8">1 massive component</h2>
      </div>
    </Step>
    
    <Step from={37} to={37} {current}>
      <div class='title pt-60 flex flex-col items-center'>
        <img width='1200px' src='what the bem.jpg' alt='bad bem form'/>
        <h2 class="text-2xl mt-8">This was done in my dummy repo to protect the names of the innocent</h2>
      </div>
    </Step>
    
    <Step from={38} to={38} {current}>
      <div class='title pt-10 flex flex-row items-center'>
        <img width='400px' src='constructor.png' alt='before and after constructor'/>
      </div>
    </Step>

    
    <Step from={39} to={39} {current}>
      <div class='title pt-10 flex flex-row items-center'>
        <img width='400px' src='getters.png' alt='before and after getters'/>
      </div>
    </Step>

    <Step from={40} to={40} {current}>
      <div class='title pt-60 flex flex-col items-center'>
        <h1 class="text-8xl">The goals</h1>
        <div>
          <h2 class="text-4xl mt-8">1. general reactive form features</h2>
          <h2 class="text-4xl mt-8">2. new features since angular 14</h2>
          <h2 class="text-4xl mt-8">3. my new approach to forms</h2>
          <h2 class="text-4xl mt-8">4. common form pitfalls</h2>
          <h2 class="text-4xl mt-8">5. pros and cons of the approach</h2>
        </div>
      </div>
    </Step>

    <Step from={41} to={41} {current}>
      <div class='title pt-40 flex flex-col items-center'>
        <h1 class="text-8xl">Thank You!</h1>
        <h2 class="text-4xl mt-8 mb-8">Happy Architecting</h2>
        <img width='700px' src='destroy.png' alt='is this the self destruct mechanism?'/>
      </div>
    </Step>
  </div>

  <!-- navigation controls -->
  <div class='fixed bottom-32 w-full flex-around z-40'>
    <div class="join w-1/2">
      <button class="join-item input input-success w-1/2 font-extrabold" on:click={prev}>Go Previous</button>
      <button data-testid="tester" class="join-item input input-success w-1/2 font-extrabold" on:click={next}>Go Next</button>
    </div>
  </div>
</main>

<style lang="postcss">
  main {
    background-color: #1E1E1E;
  }
  /* .hide-away {
    height: 909px;
    width: auto;
  } */

  .flex-around {
    @apply flex justify-around;
  }
  .spinner {
    fill: white;
  }
</style>