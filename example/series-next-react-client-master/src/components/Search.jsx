import React from 'react';

import { search } from '../utils/api';

class SearchField extends React.Component {

  handleSubmit(e) {
    e.preventDefault();

    const searchTerm = this.searchInput.value;

    this.props.handleStartSearch(searchTerm);
  }

  render() {
    return (<form onSubmit={(e) => this.handleSubmit(e)}>
      <input
        type="text"
        ref={searchInput => this.searchInput = searchInput}
      />
      <button>Keresés</button>
    </form>)
  }
}

class Series extends React.Component {
  render() {
    const { show } = this.props.series;
    return (<div>
      <img height="400" src={show.image.medium} />
      <span>{ show.name }</span>
      <span>{ show.summary }</span>
    </div>);
  }
}

class SeriesList extends React.Component {
  render() {
    const { seriesList } = this.props;
    return (<div>
      { seriesList.map(
          series => (<Series series={series} key={series.show.id} />)
        ) }
    </div>);
  }
}

export default class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      seriesList: [],
    };
  }

  startSearch(searchTerm) {
    search(searchTerm)
      .then((foundSeries) => {
        this.setState({
          seriesList: foundSeries,
        });
      })
      .catch(console.log);
  }

  render() {
    return (<div>
      <SearchField handleStartSearch={s => this.startSearch(s)} />
      <SeriesList seriesList={this.state.seriesList} />
    </div>)
  }
}

