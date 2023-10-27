import {Button, Col, Row, Space, Typography} from 'antd';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import notFoundImage from '../../assets/img/404-image.png';
import notFoundNumber from '../../assets/svg/404-number.svg';
import {ROUTES} from '../../constants/constants';
import './page-not-found.less';

const PageNotFound = () => {
    const {t} = useTranslation();
    return (
        <Row className="page-not-found-container" data-testid="no-page-found">
            <Col className="flex-center flex-column text-column" span={12}>
                <Typography.Text className="text-3xl font-bold text-grey-muted m-b-xs">
                    {t('label.page-not-found')}
                </Typography.Text>
                <Typography.Paragraph className="text-lg text-grey-muted-muted">
                    {t('message.page-is-not-available')}
                </Typography.Paragraph>
                <Space data-testid="route-links" size="middle">
                    <Link to={ROUTES.HOME}>
                        <Button type="primary">{t('label.go-to-home-page')}</Button>
                    </Link>
                    <Link to={ROUTES.EXPLORE}>
                        <Button ghost type="primary">
                            {t('label.explore')}
                        </Button>
                    </Link>
                </Space>
            </Col>
            <Col className="flex-center image-column" span={12}>
                <img alt={t('label.not-found-lowercase')} src={notFoundImage}/>
            </Col>
            <img
                alt={t('label.not-found-lowercase')}
                className="not-found-text-image"
                src={notFoundNumber}
            />
        </Row>
    );
};

export default PageNotFound;