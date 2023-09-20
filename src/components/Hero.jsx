import React from 'react';
import logo from '../assets/logo.jpg';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="ai-summarize_logo" className="w-40 object-contain"/>

        <button
          type="button"
          onClick={() => window.open('https://github.com/CodingKao')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="desc">
      The AI Summarize application leverages OpenAI GPT-4's capabilities to provide users with easy-to-use article summarization. Just copy and paste an article link, and the app quickly generates concise and insightful summaries, making information consumption a breeze.
      </h2>
    </header>
  )
}

export default Hero