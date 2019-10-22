import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import NoteContainer from '../NoteContainer/NoteContainer';
import NoteDisplay from '../NoteDisplay/NoteDisplay';
import Loading from '../../components/Loading/Loading';

import { fetchAllOrders } from '../../thunks/fetchAllOrders';
import { fetchAllNotes } from '../../thunks/fetchAllNotes';

export class App extends Component {

  async componentDidMount() {
    const { fetchAllOrders, fetchAllNotes } = this.props;
    await fetchAllOrders();
    await fetchAllNotes();
  }

  render() {
    const { currentOrder, currentNote } = this.props;
    const currNoteTabs = this.props.notes.filter(note => note.order_id === currentOrder);
    const clickedNote = this.props.notes.find(note => note.id === currentNote);

    return (
      <div className='App'>
      <Header />
      {
        this.props.loading
        ? <Loading />
        : (
          <section className="Content-Container">
            {
              this.props.orders.length &&
              <SideBar />
            }
            {
              this.props.notes.length &&
              <NoteContainer currNoteTabs={currNoteTabs} key={`${currentOrder}Order`}/>
            }
            {
              typeof this.props.currentNote === 'number' &&
              <NoteDisplay {...clickedNote} key={clickedNote.id}/>
            }
          </section>
        )
      }
      </div>
    )
  }
}



export const mapStateToProps = state => ({
  loading: state.loading,
  orders: state.orders,
  notes: state.notes,
  currentOrder: state.currentOrder,
  currentNote: state.currentNote,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setOrders: data => dispatch(actions.setOrders(data)),
  setNotes: data => dispatch(actions.setNotes(data)),
  setCurrOrder: data => dispatch(actions.setCurrOrder(data)),
  fetchAllOrders: data => dispatch(fetchAllOrders(data)),
  fetchAllNotes: data => dispatch(fetchAllNotes(data)),
});

App.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
