import React from 'react';
import { shallow, mount } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './App';

import { fetchAllOrders } from '../../thunks/fetchAllOrders';
import { fetchAllNotes } from '../../thunks/fetchAllNotes';

jest.mock('../../thunks/fetchAllOrders');
jest.mock('../../thunks/fetchAllNotes');

import * as actions from '../../actions/index';


const mockNotes = [
  {
    id: 1,
    title: 'Note Title 0101',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    status: 0,
    order_id: 9
  },
  {
    id: 2,
    title: 'Note Title 0102',
    copy: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    status: 0,
    order_id: 8
  },
  {
    id: 3,
    title: 'Note Title 0103',
    copy: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    status: 1,
    order_id: 9
  }
]

const mockOrders = [
  {
    id: 8,
    number: 2222,
  },
  {
    id: 9,
    number: 2222,
  }
]

describe('App', () => {

  describe('App Component', () => {
    let wrapper;
    let mockfetchAllOrders = jest.fn()
    let mockfetchAllNotes = jest.fn()

    beforeEach(() => {
      wrapper = shallow(<App fetchAllOrders={mockfetchAllOrders}
                             fetchAllNotes={mockfetchAllNotes}
                             notes={mockNotes}
                             orders={mockOrders}
                             />
                        )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it("should invoke the thunk fetchAllOrders on componentDidMount", async () => {
      await wrapper.instance().componentDidMount()
      expect(mockfetchAllOrders).toBeCalled()
    })

    it("should invoke the thunk fetchAllNotes on componentDidMount", async () => {
      await wrapper.instance().componentDidMount()
      expect(mockfetchAllNotes).toBeCalled()
    })

  });

  describe('mapStateToProps', () => {

  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch for setLoading', () => {
      const mockData = false
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.setLoading(mockData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setLoading(mockData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });

});
