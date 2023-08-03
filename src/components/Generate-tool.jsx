const GenerateToolsText = (tools) => {
    const toolLabels = {
      html: { color: '#e34f26', label: 'HTML' },
      css: { color: '#264de4', label: 'CSS' },
      js: { color: '#f7df1e', label: 'JS' },
      ts: { color: '#3178c6', label: 'TS' },
      api: { color: 'black', label: 'API' },
      scss: { color: '#cd6799', label: 'SCSS' },
      bootstrap: { color: '#8212fa', label: 'BOOTSTRAP' },
      react: { color: '#61dafb', label: 'REACT' },
      vue: { color: '#41b883', label: 'VUE' },
      vuetify: { color: '#7bc6ff', label: 'VUETIFY' },
      tailwind: { color: '#07b6d5', label: 'TAILWIND' },
      mantine: { color: '#15aabf', label: 'MANTINE' },
      mui: { color: '#007FFF', label: 'MUI' },
    };
  
    return Object.entries(tools)
      .filter(([tool, value]) => value === 1 && toolLabels[tool])
      .map(([tool]) => (
        <h4
          className='mr-2 font-sans font-bold tracking-normal subpixel-antialiased'
          style={{ color: toolLabels[tool].color }}
          key={tool}
        >
          {toolLabels[tool].label}
        </h4>
      ));
  }

  export default GenerateToolsText;