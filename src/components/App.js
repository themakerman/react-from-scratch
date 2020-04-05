import React from 'react';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Hi hello wasup. This is my react boilder plate :). Its superfast.</p>
                <p>This was made with minimalistic package.json configuration of webpack and babel.</p>
                <p>
                    <strong>webpack modules:</strong>
                    <ul>
                        <li><strong>webpack:</strong> The main bundler.</li>
                        <li><strong>webpack-cli:</strong> cli-tool to make builds in package.json scripts section and use various other webpack comands.</li>
                        <li><strong>webpack-dev-server:</strong>This is for starting webpack-dev-server and hot reloading.</li>
                    </ul>
                </p>
                <br />
                <p>
                    <strong>babel modules:</strong>
                    <ul>
                        <li><strong>babel-core:</strong> The main core of babel transpiler.</li>
                        <li><strong>babel-loader:</strong>The loader that is used from webpack to start transpiling.</li>
                        <li><strong>babel-react:</strong> Preset plugin for react.</li>
                        <li><strong>babel-env:</strong> Preset plugin for es2015+.</li>
                    </ul>
                </p>
            </div>
        )
    }
}

export default App;