import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as S from './styles'
import { Auth } from 'app/api/firebase/models'

const mapStateToProps = state => {
  return { state }
}

@withRouter
@connect(mapStateToProps)
export default class AdminUtilities extends Component {
  handleSignOut = async () => {
    await Auth.signOut()
  }

  handleLogReduxStore = () => {
    console.log(this.props.state)
  }

  render () {
    return (
      <S.AdminUtiltiesPage>
        <S.Title>Utilities</S.Title>
        <S.ActivityCard>
          <S.CurrentUserNavItem onClick={this.handleLogReduxStore}>
            <S.NavItemContent>
              <S.Text>Log app state to console</S.Text>
            </S.NavItemContent>
          </S.CurrentUserNavItem>
          <S.CurrentUserNavItem onClick={this.handleSignOut}>
            <S.IconWrap></S.IconWrap>
            <S.NavItemContent>
              <S.Text>Sign out</S.Text>
            </S.NavItemContent>
          </S.CurrentUserNavItem>
        </S.ActivityCard>
      </S.AdminUtiltiesPage>
    )
  }
}
