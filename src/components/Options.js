import React from 'react';

export default class Option extends React.Component {

  return () {
    return (
      <div>
        <form>
          <input type='submit' name='option1' />
          <button>Option 1</button>
        </form>

        <form>
        <input type='submit' name='option2' />
        <button>Option 2</button>
        </form>

        <form>
        <input type='submit' name='option3' />
        <button>Option 3</button>
        </form>

        <form>
        <input type='submit' name='option4' />
        <button>Option 4</button>
        </form>
      </div>
    )
  }
}