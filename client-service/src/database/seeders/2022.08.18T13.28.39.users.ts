import { QueryInterface } from 'sequelize'
import { MigrationFn } from 'umzug'

export const up: MigrationFn<QueryInterface> = async ({
  context: queryInterface,
}) =>
  queryInterface.bulkInsert('users', [
    {
      email: 'example1@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MQ.qpmhkUh05Zftn3G6p6dXrE3rYC2LJersdx9e8ntwrQ4Hf_b34bN0zXavlFZnwUz7n6S73A93-b_HebCzeVBgX6kULW0Z3J8eCxiuDAbKAoF5ej5CBwBPmn6fEihWRkv62BXseSaI9KVhlCXvmPvvzDLI8qDEnXcdPpQ032vj6zHEvXQT3UTZICMzDFnu2LARh6IrXX1_zSFaV40t5g35YBkohUC2SxsRBg9qRnDeA0TqLyOntD3I9FbmrjXAfl1nuFeVh5tzjLlYCCoTPjjmERNBaDFFG7y662TA5Jg4Tx30hvurKJURvigBCi9V8Q0KEWKZcmBm-H3EiwhIlWJlUA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example2@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.Mg.wsT5kJ4ReKJrB7nE164To-opY06drf0L0Xv772Yyh1zWRvnJkZFzF3hgtmhb8oWQLqOR0a-8IEuUyIB6f7IDYaYUfHY_zIf_SPOUdqKIg_mVghC_lJ9YltC7zuxMvyLK0Y7RnRBOPZ0Kn25OOqzRH41EGLIZKb0RankjkwJxd9ToP4rHGg2ddDo_beIf5SVj86PWPs8AnnlMjmu63eLydrGvgBdwwk6yJs40K5vlYK96iResVXwAJ9cG6U9UKWIVpSXnoCqyrkKKyT6cF5ai8n3UfCrfitW1NXAnvEKUffc7Bu3cHDw-H6WPSwUIBVOU-7dwKXq1tN0XAEhCLt4qYA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example3@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.Mw.TOj8PpCn9Hh-yM4RKjOzefGGGsubJUs0tHX5VAiMoZ6HRllrhV6KyOEwxNb_BANKYVaPJEUgZ5NpVl68_rlcpXjtVQjVB0Kne7nBXLB7HccxaHXNCR9toJudFVJAii0jIljmLW4Jkx02SmKBHL8TbIy73m7bdnoxY6zmyFnci0QmSkoy4_dpL8lN_wM4bsynDwLcukKUUqirkuBakOhLkLT0zfkD702iInALrYQSMu5Rd1bvwRegyUTti0U_Ltzil_LP5NZhEWudgIXWy2j8yMZoqmLZZCTbuACra1uByJbxfE2UKWKdG-2IUXBfwokUBGWBg7txyO78axUgxY82KA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example4@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.NA.XXRV5QF3JkRK2UqC3GmVYjfv3MCkI1LNAyLriyukgWiiRkEEGJvabtT2RONi63_EDMDM03g7DpVJH2ODV3rtcUjRAqY78Y2r13Aj0tUxZSyXg4ttvwCiaqKZAMA_T_lJkUQ7vMF2xrG0cskkt33bImCz7ET2lvrdac10eHcXx6HN5P5Qcb44Cx3LyvkyBa0PViS-27eSWFfpSQXHr1EEe_KAmmQkIVZ-0eJINR2dYVOc3lq0-QoxvlAAmJPTxYKfycElPqaoh9E2U82vs8-vzb9FXtiOm79ZgSaXHU5ZtO-4tnKpF03P0kXiu39UVdg-tut-Yjk3JYpujrC81_g2jw',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example5@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.NQ.nA5hgojtgrPm_GFlozVWAcFM4FKQF4hL2UMnAsHuOaFQsTlXmv5aTf8eJnb3fzuNZj6XfnWr0B_mwhQq_mISlj1GmvMnZAEpU90U03hblAXf9C_FCGjEQQjaieYzeh8sv5oVKBAKylIsOiIbS1DKHKXiXO9cIM4Wm1FGpzSEb-gpxktn5VXK5r7rvKJUr01WRP66MQQOjgKwAbJiomcgk9Do240SnRhZnly19nwzfxS-JWc6fZu4E9IeEY8zRz-4LztGeB8ZYPLZAXxKjpiFGLWA0j_8YyvgylToMiLkjaS_UX-2CTfVUKqLmgg9_cyvCxGTdDKNdAx6c2nDvkeoWw',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example6@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.Ng.BjfNG4OdPCS--HCXEMHVobmYg2jwiljW-AZfq33GxlBY1QtD8evaRPPcjBXrYt4eTuwFGT6Vlf-4rG4v9AA4gtg8SN1Y12ly1e7ECtvcuGGKAZwHw7Rwj5Xxxk8oaxAGjmZhuAjtCGbaJKJpMq8YDj1b_-DH5dZQe08IY9zuuPhWDAKSN-1S6mazWHD-Kj1dIgZehSbTCS52eTB4hsoC_TmkVetWPNSvxP2JRTB_yxDNlCBPd6_15KbHY-TXF4ezZLVB73oZztBplV7zyBWh8PM_7xCWWySuZhJi73NI5OX39aRftCklbWwwf2deXV1LltgYkZfGGakrWk8vXirjHg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example7@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.Nw.pJ1wHBdFYmv5hhjtdplLlQ3EAxvSwY61UYYyhgX8I_9EJYaH4nsv9OwqLJFm7aTAQ3tH79Pk4WPSHsKsACjBKkaso5LW5JsZMIH8o5DCLqFzTtfbjDCc8kwJPfyunufp53r0a7Rtu1G_jf2lxV2EzsQaDzwx7SGTwUHsUJsuZPmfiBE56NsJsmaYU8q_ljQA-Hmw7qS7dBvKQ6h3PjBNxhnThc_b8cCiwWtIngWZ-dkQlwt_-fca1sJCOjI5SOiqVAlZAQXxc1OygLnCrHq59hVCsT8swsTEtxe8cFfwF-IzcL74mn35gqosHzh6geV8Q2Z5eN2Ui8lRHFxYYM0i8g',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example8@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.OA.hOndZhaNVLF-qTzmPmZw62z3eU1Q6822mgfvPDAjnQdj-RJdptpi1HSQ00PrEOvyPX6J9VNZhSQSuO3m5-XuaK7nJ7sxoKvKFZK8RSw2aCNNiVuzlPELPJw9FaW8JUrZriz-FrJkY4uGrFiNrtsY_K6AbsEP4nYCFEIE9x86EFjuX3jCeWG4pcMkk93PRu8tD6UPFfgMo0Ha_NDuCef9nMcwjXpqfVQQO-JR6O6wRWqRkw6XjXX8LgKfaDv0wmZzLxkYShzhPHbvkOH-Vljlq8VZHazaHo_dQ9FQnEF3_b7OPFazNwKLqPbLUW6OWibxACFL_Muiaod8FooliygLzw',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example9@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.OQ.zkER6uDfCdN8oNBWMIIkmTGw0vEfPJXsiKVcbPLiaBlBnyKS6P6gL1UozIQSku85jxx9TW29ZYipGmGQE9yHEJVHiPJqTHaaAIWj10C0fkeixKJ0rnrN5HZfuKL9vc6BmW4A_17QeuRQ5PUvlTndXWgDMu_hsP9Cq1AJnMEh9KS2K2uCdNqr0HMmYgNQaNEZ63Sfx5rwVtXSW3hrqZKqzuWIL46how-2CxmXZkkRHuwLP_tPLYNyKBw5r9fYGF4dCSyrNPFgtEXwVDSjYDyGn-arluK_QPlTp85rD74I-nGgaCnPUBaGf3h9n0NhRrU49KFlfVm6ed8mXBBAm5WVjw',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example10@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTA.1vxGrfQ8DvAkJUOmlpMK7XnWGizRdSdELxyprRlpqhfK0CDNQCheOYDJ9pY9Kuvvni7bQOQB4DdGUgvb71k2aKhLka1Qb0WRtIUya7Ept9PTaPZpCS2AJKwvkBjD3XcM-dRuIPjhB-7bw3694qUb7Ew0zdpgSOOKmoDJzEN0MJPKbZUEGjXQlnqW_TdPmWSOn2A1VhVoByIfbidDsQ9HBekq9_9bcXh_jkQf7zOIzVciuXv9VRXKS8HWLEG0OXdHDV58zdRwePxqvS_3CqWgf4Re8zZDHwto_-_CCWt0R_fbpVoeUp1aVAwdWfju2TyYkZ2v-XipxY9ZHzgsSYoYig',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example11@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTE.RUspx1VxaI8j5i_8ChDLXLEBl-sQhRqQfXqn6ot84iuZ3BdMSmke3e3x8H-Yai35d_TLlJ55H0iYGLP0kFv5glKlw117bJ7d4D4Gqewki4UorgCY4-9Zv0R1VJeEcnKOtKPydgHY4_6hzClXiYWq0UA0_RZ5XU0CyX4m8HCsY2ygmRaLemBg73eKZbsuTl8VuvQVtZb5unZXmk2KftTHk5-e8Eq6Wn7lHuavtzwOoM6ZpjVrPPY3_pXmX3thcgSr3jDxupqkWmBOsC6tsnPEAl9I-8KMpmtotUUzkOcA7-wweKAvXjz3TjuUPXJ05o8PDAyR4oAfYlUC2YOEXV7Gxw',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example12@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTI.dsYYj1U3dX5vIuToLH-m_crh8MhaWNC-8VCdqLvxUTef6U2EbBePgk4qpLGdbUi8Zq0Xlu_gJE3ZxnjvAZYfZnIAUJtuy34GKUtSdiIaUBiJSqpFJbdQK3HpPe97AwJR52hhvLR0WKR0u74D_VkebEYLzrl6OfGuyGwAsGva6q8OQLg2HhP2HoOHFlehYfUwF_pNIcLuqPLFo4K7WLUpP1DTh5gk2ga8N_Pa5-YfVamFCcUdro7JK8OjboX9r2K_vp7GyboSfNODjGor-VKkYZG2QlCAT95TfHG1hTVI_VIfmR_nuHTCcxHmeuRlAyCJ_vK1xNijt6XKUmqFq8-shg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example13@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTM.mI6YWvmYvplfKuTl4DEVBZCDkmD4r8ZGFUq9pcV0Dm16UoYQYzTls2HW_DVil7vv_RDABoyqicicRGbTSjQG-zuiH0K_pNdjCpcQgL4jGUmJQtfLaDAZUWVa9LYeWmugQqBXOdYzXrKYlLNBSrMeDihzrZUoZiG--B4ZoFbncQ1XaXmukyQE995gHNiVyq6j6G_ddm7KPqVj7a9BC_Ti_jQGBD2_Gmp_J5GrOpNjikfrNL7XWmo98CNYlzdi08ArkCQbxB8R4AUEN6kn6OPzPspcHFG66GBQft5G0IDZB1Kx2OcE5zc5dQP1UZCtTmqocLLG9nNIErAqO5LzlM2b4w',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example14@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTQ.f5DThJZ65XoYWEqVtCB_oJ6ftdQ4f-bHtyNKvG5RLMERupa5mQ26EseY9ohR-OZDXyj7eJxMYyVJglx6FR56BHX7px-6N0keNegrZFhtHziPKDs5Ty4D_gIZBIlarJsjOgbgWD_eMKIiOkWCyrA0s_if_gaauoInab6sPEhVc3tI2JG3JDrO44a-glYiWIgI71vu7HsG1Ym0qGPRKpDXoGFmTevf_nw-D2lAVV8B1uBdSOSZRXkB-fev0xjEI2oQgicyFr3tfdIGjOU48kHkf8joCuYRAscDPsR_se8KLUj9-TcljUuCQr-TztME8J8GY9RiLD1C3l2qt8v_tA3z4A',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example15@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTU.Trji9XbS3rUEURttXnyOeYB0hfYBl5sF5hZf-lGroAwa0CEWUhPenj_3Izho9uW7xK0hBZJg4qhIYkWSTRsYMZWiZ88YOhzCOGdlVxU-_nb-NDimfkCnYfm4dOeulMUZDe4CEOYLA6hrWPI7L-xLiLLFOOHhDCP1hOnjJwomFAZboG0G5_ytIrjppvhRoQCxDNkjffNkZ7NE6q9pMZ51OM7Bfrq4ag14udslW-LBuQle4MTb7U5CEInYdaEvAbcaYTec8hVfTPWL8xQMTI07PQj49Aw13eBL8qTiPajmGqRiJyR_ENgTnVVB0tChkWCD33m8fR0BVnIGLUqUoCbaUg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example16@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTY.AXsUem6BwUSdtJxzepcj4SoFUsbrdnT3-_feXAi4aN-DK7-WtZxyZBnZj1pzRyE0gzVyh0KMaQLsRcGYRsNPKQiIChq9T3cw4zaibBE0oeP9h1z0LribD1xESROFEgEMQ1mKLB3WDR2jivTJaSlQs5Ub2Re0EsY2FOUl9zypL18GCFPEtiXPuaK3YVS9BkAX0eEHpnQRxx13fUqSCamk2KP-WKsCvaJQ2QvzWJ4PH9Bh_aUWBvTOchxzT-47aLG4UeBNRKWHGh9Y_Z9Q3cof0XW3ZLtVHutDk884WFrMNAg89NJEeVUe7X-4G3F4wsIdI2ipQshpRo6U2f4ICE8J2A',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example17@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTc.VbO2eJUklSD9oDHDwnXOXfTD9g_IIBblzxvqXensfvDAlcyJmwjqATZPfEWMgFpbewCXc7ykWSzouA5I75wIQ8gH2sKpeMeWYKOFkXI03mYwETxFHMa5gF7iVtZBdDS1CuxSziaoylDquk12nJyS923vnvorhZTPjVIXmYtPHFhg5mbYcp3hJ7bANOXmkdbG51Glf12O7RYp-7fQmzQ_SNPwWavocZjwlW095tUIH2uIFOhPj8e4BLp0V8Ks_q2eX_9MfEDFg2umKvpZHnKI23tDltG323DQ6QXQfV7k2KsEoE-J-yYlDVysNHbfodMfRBs4QOppWOZzWKEmCwzUWA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example18@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTg.wfwUYC87ilI8OZws4a5XYuLzF8CuaJsNLrPZUKzRiXfrKamaDYpXFSDCytBsitD1GHIhj3ND7msb5x7Y0q1k0vNMnvGsPfsbZ_FCAnWHhJjRIG70ah0ynQNDg6nu3N2002M0dsGSLQJyx19K6sxhfyCmQXiEGrLJ5xjeEp6kFuzNs84_DKMv-57WhLhlZwDILLuSzGU2NESOlEBoCjqWRxMpkT73IIGhetaSJD96d0a1_C3xvV8Vo_DC4WlRi-e8zZlbI835ISCrxCGKlwnUgqoGC0cdIz5R7-6xUujUlr8ms754zXECcPG0MypXOb6sJyelZ4ZE1l4uYnyiu8S4VA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'example19@example.com',
      password: 'test123',
      token:
        'eyJhbGciOiJSUzI1NiJ9.MTk.XRgs-EYqNZPp0jL7Mn0HF-Dq8RTeH70Gp1KM-hh4ly01iO11E7CiNoLz2nGrOO9P5MXFSRbjzuyFZUcZC8dnc3TB3tEMHt-hqzPLcomRvnO6EJskWvDgQewnxMuMpB4TGsLIQcysxCMd732h1Tx8zAbdMRdV7dBB1qI5buOoWnsH6nwTzn25e8EvaRSLjGqe9QrGGz19dpfUdy5YajgEaYWyBUVEXvrg0Hc_8Bao2-CqmJQ7qwFWNh7TUZk0fZxNbSWiOR6DrAgtjGyXsi_CNhHhU-UxiCOwi7N86R19PWwinPpwca7FRXSwQ_9xCawBz_fh7dl5fRXuhtq_KztOPw',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])

export const down: MigrationFn<QueryInterface> = async ({
  context: queryInterface,
}) => queryInterface.bulkDelete('users', {}, {})
