//import * as React from 'react'
import React from 'react'
import GridLayout, {Layout} from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import './index.css';

type State = {
  layout: Layout[]
}

class Hello extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      layout: [
        {i: 'a', x: 0, y: 0, w: 1, h: 2},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2},
      ]
    }
  }

  onLayoutChange = (layout: Layout[]) => {
    console.log('#layout:', layout)
    this.setState({layout: layout})
  }

  render() {
    return <div>
      <h1>Hello React</h1>
      {JSON.stringify(this.state.layout, null, 2)}
      <GridLayout className='layout' layout={this.state.layout} cols={12} rowHeight={30} width={1200}
                  onLayoutChange={this.onLayoutChange}>
        <div key='a'>A</div>
        <div key='b'>B</div>
        <div key='c'>C</div>
      </GridLayout>
    </div>
  }
}

export default Hello
