import React, { useState, useEffect } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const ProfileScreen = ({ location, history }) => {
<<<<<<< HEAD
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userDetails = useSelector(state => state.userDetails);
	const { loading, error, user } = userDetails;

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdateProfile = useSelector(state => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	const orderListMy = useSelector(state => state.orderListMy);
	const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		} else {
			if (!user || !user.name || success) {
				dispatch({ type: USER_UPDATE_PROFILE_RESET });
				dispatch(getUserDetails('profile'));
				dispatch(listMyOrders());
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [dispatch, history, userInfo, user, success]);

	const submitHandler = e => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(updateUserProfile({ id: user._id, name, email, password }));
		}
	};

	return (
		<Row>
			<Col md={3}>
				<h2>Thông tin tài khoản</h2>
				{message && <Message variant='danger'>{message}</Message>}
				{}
				{success && <Message variant='success'>Cập nhật tải khoản</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId='name'>
							<Form.Label>Họ và Tên</Form.Label>
							<Form.Control
								type='name'
								placeholder='Nguyễn Văn A'
								value={name}
								onChange={e => setName(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='example@gmail.com'
								value={email}
								onChange={e => setEmail(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='password'>
							<Form.Label>Mật khẩu</Form.Label>
							<Form.Control
								type='password'
								placeholder='a-z A-Z 0-9'
								value={password}
								onChange={e => setPassword(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='confirmPassword'>
							<Form.Label>Nhập lại mật khẩu</Form.Label>
							<Form.Control
								type='password'
								placeholder='0-0 A-Z a-z'
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button type='submit' variant='primary'>
							Cập nhật
						</Button>
					</Form>
				)}
			</Col>
			<Col md={9}>
				<h2>Đơn hàng của tôi</h2>
				{loadingOrders ? (
					<Loader />
				) : errorOrders ? (
					<Message variant='danger'>{errorOrders}</Message>
				) : (
					<Table striped bordered hover responsive className='table-sm'>
						<thead>
							<tr>
								<th>ID</th>
								<th>NGÀY</th>
								<th>TỔNG</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{orders.map(order => (
								<tr key={order._id}>
									<td>{order._id}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>
										{order.totalPrice
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										vnđ
									</td>
									<td>
										<LinkContainer to={`/order/${order._id}`}>
											<Button className='btn-sm' variant='light'>
												CHI TIẾT
											</Button>
										</LinkContainer>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Col>
		</Row>
	);
=======
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>Thông tin tài khoản</h2>
        {message && <Message variant="danger">{message}</Message>}
        {}
        {success && <Message variant="success">Cập nhật tải khoản</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Họ và Tên</Form.Label>
              <Form.Control
                type="name"
                placeholder="Nguyễn Văn A"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="a-z A-Z 0-9"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Nhập lại mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="0-0 A-Z a-z"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Cập nhật
            </Button>
          </Form>
        )}
      </Col>
      <Col md={9}>
        <h2>Đơn hàng của tôi</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NGÀY</th>
                <th>TỔNG</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.totalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    vnđ
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        CHI TIẾT
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
>>>>>>> feature/Duy2
};

export default ProfileScreen;
