<main>
<slot></slot>
<!-- add login/signup footer and other info like app capabilites -->
</main>
<footer>
  <p class="logo">IPA-API</p>
  <p class="tagline">Keep tabs on what tabs you've cracked open and find new ones you might enjoy</p>
</footer>

<style>
  main {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  footer {
    /* make auth footer color a standard brand color */
    background-color: purple;
    color: #ddd;
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
  }
  .logo {
    font-size: 3rem;
  }
  .tagline {
    width: 80%;
    font-size: 2rem;
    text-align: center;
  }
</style>