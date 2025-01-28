import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"
import AuthFlow from "@/ui/template/AuthFlow/AuthFlow.vue";
import Button from "@/ui/element/Button/Button.vue";
import Checkbox from "@/ui/element/Checkbox/Checkbox.vue";
import Input from "@/ui/element/Input/Input.vue";
import Title from "@/ui/element/Title/Title.vue";

export default {
    title: 'Template/Auth-Flow',
    component: {},
    tags: ["autodocs"],
    argTypes: {
        bgColorSrc: {
            description: "背景顏色",
            control: { type: "text" },
            table: {
                category: 'PROPS',
                defaultValue: { summary: "" },
            },
        },
        bgImgSrc: {
            description: "背景圖片",
            control: { type: "text" },
            table: {
                category: 'PROPS',
                defaultValue: { summary: "" },
            },
        },
        title: {
            description: "標題",
            control: { type: "text" },
            table: {
                category: 'PROPS',
                defaultValue: { summary: "" },
            },
        },
        className: {
            description: '客製化樣式',
            control: { type: 'text' },
            table: {
                category: 'PROPS',
                defaultValue: { summary: "" },
            },
        },
        description: {
            description: "描述",
            control: { type: "text" },
            table: {
                category: 'SLOTS',
                type: {
                    summary: "Vue Component | HTML",
                },
            },
        },
        form: {
            description: "表單",
            control: { type: "text" },
            table: {
                category: 'SLOTS',
                type: {
                    summary: "Vue Component | HTML"
                },
            },
        },
        externalLinks: {
            description: "外部連結",
            control: { type: "text" },
            table: {
                category: 'SLOTS',
                type: {
                    summary: "Vue Component | HTML"
                },
            },
        },
        signUp: {
            description: "註冊",
            control: { type: "text" },
            table: {
                category: 'SLOTS',
                type: {
                    summary: "Vue Component | HTML"
                },
            },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: 'Auth-Flow',
            description: {
                component: '驗證流程的呈現及說明。',
            },
        },
    },
};

//==== 登入 ====//
export const authFlowLoginStory = {
    name: '登入',
    args: {
        //props
        bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
        bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
        title:"Welcome Back",
        className:"",

        //slot
        description: `<p class="text-neutral-600">Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>`,
        form:`<div><Grid fluid><Row><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email" placeholder="Email" /></Column><Column md="12"><Input className="text-primary" type="password" prefix="SvgLock" initValue="" label="Password" placeholder="Password" /></Column><Column md="12" class="flex justify-between items-center"><Button variant="text" className="text-neutral-600">Forgot Password?</Button><Checkbox :dataSource="[ { label: 'Remember me', value: '1', isDisabled: 'false' } ]" :initValue="[]" direction="row" size="medium" v-model="vModelData"></Checkbox></Column><Column md="12"><Button variant="filled" width="fluid">Login</Button></Column></Row></Grid></div>`,
        externalLinks:`<Grid fluid><Row justify="center"><Column md="12" className="flex gap-4 justify-center"><Button className="ded-custom-icon" variant="ghost" prefix="SvgGoogle"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgFacebook"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgLine"></Button></Column></Row></Grid>`,
        signUp:`<Grid fluid><Row><Column md="12" align="center"><span class="text-neutral-300">Don't have an account?</span><Button class="text-link" variant="text">Sign up</Button></Column></Row></Grid>`,
    },
    render: (args) => ({
        components: { AuthFlow, Grid, Row, Column, Checkbox, Button, Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        Today is a new day. It's your day. You shape it.
                    </p>
                    <p class="text-neutral-600">
                        Sign in to start managing your projects.
                    </p>
                </template>
                
                <template #form>
                    <div>
                        <Grid fluid>
                            <Row hasGap>
                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="text"
                                        prefix="SvgMail"
                                        initValue=""
                                        label="Email"
                                        placeholder="Email"
                                    />
                                </Column>

                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="password"
                                        prefix="SvgLock"
                                        initValue=""
                                        label="Password"
                                        placeholder="Password"
                                    />
                                </Column>

                                <Column md="12" class="flex justify-between items-center">
                                    <Button
                                        variant="text"
                                        className="text-neutral-600"
                                    >
                                        Forgot Password?
                                    </Button>
                                    
                                    <Checkbox
                                        :dataSource="[
                                            {
                                                label: 'Remember me',
                                                value: '1',
                                                isDisabled: 'false'
                                            },
                                          ]"
                                        :initValue="[]"
                                        direction="row"
                                        size="medium"
                                        v-model="vModelData"
                                    >
                                    </Checkbox>
                                </Column>

                                <Column md="12">
                                    <Button 
                                        variant="filled" 
                                        width="fluid"
                                    >
                                        Login
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
                
                <template #externalLinks>
                    <Grid fluid>
                        <Row justify="center" hasGap>
                            <Column md="12" className="flex gap-4 justify-center">
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgGoogle"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgFacebook"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgLine"
                                ></Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
                
                <template #signUp>
                    <Grid fluid>
                        <Row hasGap>
                            <Column md="12" align="center">
                                <span class="text-neutral-300">Don't have an account?</span>
                                <Button class="text-link" variant="text">
                                    Sign up
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
            </AuthFlow>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        // `<Grid`,
                        // `  :fluid="${args.fluid}"`,
                        // `  :gap="${args.gap}"`,
                        // `  :className="${args.className}"`,
                        // `>`,
                        // `  <Row`,
                        // `    :justify="${args.justify}"`,
                        // `    :alignItem="${args.alignItem}"`,
                        // `    :hasGap="${args.hasGap}"`,
                        // `  >`,
                        // `    <Column`,
                        // `      v-for="(index) in 12"`,
                        // `      :key="index"`,
                        // `      :align="${args.align}"`,
                        // `      :xs="${args.xs}"`,
                        // `      :sm="${args.sm}"`,
                        // `      :md="${args.md}"`,
                        // `      :lg="${args.lg}"`,
                        // `      :xl="${args.xl}"`,
                        // `    >`,
                        // `      <div`,
                        // `        class="diagonal-background"`,
                        // `        style="border:1px solid #ccc; padding:8px 16px;"`,
                        // `      >`,
                        // `        Column {{index}}`,
                        // `      </div>`,
                        // `    </Column>`,
                        // `  </Row>`,
                        // `</Grid>`,
                    ].join("\n").trim();
                }
            }
        }
    },
};

//==== 註冊 ====//
export const authFlowSignUpStory = {
    name: '註冊',
    args: {
        //props
        bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
        bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
        title:"Sign Up",
        className:"",

        //slot
        form:`<Grid fluid><Row><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email" placeholder="type email" /></Column><Column md="12"><Input className="text-primary" type="password" prefix="SvgLock" initValue="" label="Password" placeholder="type password" /></Column><Column md="12"><Input className="text-primary" type="password" prefix="SvgLock" initValue="" label="Password Confirm" placeholder="type password" /></Column><Column md="12"><div class="flex flex-wrap items-center"><Checkbox :dataSource="[ { label: '', value: '1', isDisabled: 'false' } ]" :initValue="[]" direction="row" size="medium" v-model="vModelData"></Checkbox><span class="ml-1 text-neutral-600">I agree to all the</span><Button variant="text">Terms</Button><span class="text-neutral-600">and</span><Button variant="text">Privacy Policies</Button></div></Column></Row></Grid><Grid fluid><Row justify="flex-end"><Column md="6"><Button variant="soft" width="fluid">Back</Button></Column><Column md="6"><Button variant="filled" width="fluid">Sign Up</Button></Column></Row></Grid>`,
        externalLinks:`<Grid fluid><Row justify="center"><Column md="12" className="flex gap-4 justify-center"><Button className="ded-custom-icon" variant="ghost" prefix="SvgGoogle"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgFacebook"></Button><Button className="ded-custom-icon" variant="ghost" prefix="SvgLine"></Button></Column></Row></Grid>`,
        signUp:`<Grid fluid><Row><Column md="12" align="center"><span class="text-neutral-300">Don't have an account?</span><Button class="text-link" variant="text">Sign up</Button></Column></Row></Grid>`,
    },
    render: (args) => ({
        components: { AuthFlow, Grid, Row, Column, Checkbox, Button, Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #form>
                    <Grid fluid>
                        <Row hasGap>
                            <Column md="12">
                                <Input
                                    className="text-primary"
                                    type="text"
                                    prefix="SvgMail"
                                    initValue=""
                                    label="Email"
                                    placeholder="type email"
                                />
                            </Column>

                            <Column md="12">
                                <Input
                                    className="text-primary"
                                    type="password"
                                    prefix="SvgLock"
                                    initValue=""
                                    label="Password"
                                    placeholder="type password"
                                />
                            </Column>

                            <Column md="12">
                                <Input
                                    className="text-primary"
                                    type="password"
                                    prefix="SvgLock"
                                    initValue=""
                                    label="Password Confirm"
                                    placeholder="type password"
                                />
                            </Column>

                            <Column md="12">
                                <div class="flex flex-wrap items-center">
                                    <Checkbox
                                        :dataSource="[
                                        {
                                            label: '',
                                            value: '1',
                                            isDisabled: 'false'
                                        },
                                      ]"
                                        :initValue="[]"
                                        direction="row"
                                        size="medium"
                                        v-model="vModelData"
                                    >
                                    </Checkbox>
                                    <span class="ml-1 text-neutral-600">I agree to all the</span>
                                    <Button variant="text">Terms</Button>
                                    <span class="text-neutral-600">and</span>
                                    <Button variant="text">Privacy Policies</Button>
                                </div>
                            </Column>
                        </Row>
                    </Grid>
                    <Grid fluid>
                        <Row justify="flex-end" hasGap>
                            <Column md="6">
                                <Button
                                    variant="soft"
                                    width="fluid"
                                >
                                    Back
                                </Button>
                            </Column>
                            <Column md="6">
                                <Button
                                    variant="filled"
                                    width="fluid"
                                >
                                    Sign Up
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
                
                <template #externalLinks>
                    <Grid fluid>
                        <Row justify="center" hasGap>
                            <Column md="12" className="flex gap-4 justify-center">
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgGoogle"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgFacebook"
                                ></Button>
                                <Button
                                    className="ded-custom-icon"
                                    variant="ghost"
                                    prefix="SvgLine"
                                ></Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
                
                <template #signUp>
                    <Grid fluid>
                        <Row hasGap>
                            <Column md="12" align="center">
                                <span class="text-neutral-300">Don't have an account?</span>
                                <Button class="text-link" variant="text">
                                    Sign up
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
            </AuthFlow>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        // `<Grid`,
                        // `  :fluid="${args.fluid}"`,
                        // `  :gap="${args.gap}"`,
                        // `  :className="${args.className}"`,
                        // `>`,
                        // `  <Row`,
                        // `    :justify="${args.justify}"`,
                        // `    :alignItem="${args.alignItem}"`,
                        // `    :hasGap="${args.hasGap}"`,
                        // `  >`,
                        // `    <Column`,
                        // `      v-for="(index) in 12"`,
                        // `      :key="index"`,
                        // `      :align="${args.align}"`,
                        // `      :xs="${args.xs}"`,
                        // `      :sm="${args.sm}"`,
                        // `      :md="${args.md}"`,
                        // `      :lg="${args.lg}"`,
                        // `      :xl="${args.xl}"`,
                        // `    >`,
                        // `      <div`,
                        // `        class="diagonal-background"`,
                        // `        style="border:1px solid #ccc; padding:8px 16px;"`,
                        // `      >`,
                        // `        Column {{index}}`,
                        // `      </div>`,
                        // `    </Column>`,
                        // `  </Row>`,
                        // `</Grid>`,
                    ].join("\n").trim();
                }
            }
        }
    },
};

//==== 忘記密碼 ====//
export const authFlowForgetPasswordStory = {
    name: '忘記密碼',
    args: {
        //props
        bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
        bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
        title:"Forgot Your Password?",
        className:"",

        //slot
        description: `<p class="text-neutral-600">Type in your registered email address to reset password</p>`,
        form:`<div class="ded-login-content-form"><Grid fluid><Row justify="flex-end"><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email Address" placeholder="type email" :hint="{ description: 'Description', error: '' }" /></Column><Column md="12"><Button variant="filled" width="fluid">Submit</Button></Column></Row></Grid></div>`,
    },
    render: (args) => ({
        components: { AuthFlow, Grid, Row, Column, Checkbox, Button, Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        Type in your registered email address to reset password
                    </p>
                </template>
                
                <template #form>
                    <div class="ded-login-content-form">
                        <Grid fluid>
                            <Row justify="flex-end" hasGap>
                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="text"
                                        prefix="SvgMail"
                                        initValue=""
                                        label="Email Address"
                                        placeholder="type email"
                                        :hint="{ description: 'Description', error: '' }"
                                    />
                                </Column>

                                <Column md="12">
                                    <Button
                                        variant="filled"
                                        width="fluid"
                                    >
                                        Submit
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
            </AuthFlow>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        // `<Grid`,
                        // `  :fluid="${args.fluid}"`,
                        // `  :gap="${args.gap}"`,
                        // `  :className="${args.className}"`,
                        // `>`,
                        // `  <Row`,
                        // `    :justify="${args.justify}"`,
                        // `    :alignItem="${args.alignItem}"`,
                        // `    :hasGap="${args.hasGap}"`,
                        // `  >`,
                        // `    <Column`,
                        // `      v-for="(index) in 12"`,
                        // `      :key="index"`,
                        // `      :align="${args.align}"`,
                        // `      :xs="${args.xs}"`,
                        // `      :sm="${args.sm}"`,
                        // `      :md="${args.md}"`,
                        // `      :lg="${args.lg}"`,
                        // `      :xl="${args.xl}"`,
                        // `    >`,
                        // `      <div`,
                        // `        class="diagonal-background"`,
                        // `        style="border:1px solid #ccc; padding:8px 16px;"`,
                        // `      >`,
                        // `        Column {{index}}`,
                        // `      </div>`,
                        // `    </Column>`,
                        // `  </Row>`,
                        // `</Grid>`,
                    ].join("\n").trim();
                }
            }
        }
    },
};

//==== 驗證代碼 ====//
export const authFlowVerifyPasswordStory = {
    name: '驗證代碼',
    args: {
        //props
        bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
        bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
        title:"Verify Code",
        className:"",

        //slot
        description: `<p class="text-neutral-600">An authentication code has been sent to your email.</p>`,
        form:`<div class="ded-login-content-form"><Grid fluid><Row justify="flex-end"><column md="12"><div class="flex item-center justify-center gap-2"><Title :level="2">A</Title><Title :level="2">-</Title><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /><Input type="text" :hasClear="false" :maxLimit="1" initValue="" placeholder="" className="w-[44px] h-[44px] text-center text-primary text-xl" /></div></column><Column md="6"><Button variant="soft" width="fluid" prefix="SvgClock">Resend 03:28</Button></Column><Column md="6"><Button variant="filled" width="fluid">Verify</Button></Column></Row></Grid></div>`,
    },
    render: (args) => ({
        components: { AuthFlow, Grid, Row, Column, Checkbox, Button, Input, Title },
        setup() {
            return {
                args,
            };
        },
        template: `
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        An authentication code has been sent to your email.
                    </p>
                </template>
                
                <template #form>
                    <div class="ded-login-content-form">
                        <Grid fluid>
                            <Row justify="flex-end" hasGap>
                                <column md="12">
                                    <div class="flex item-center justify-center gap-2">
                                        <Title :level="2">A</Title>
                                        <Title :level="2">-</Title>
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                        <Input
                                            type="text"
                                            :hasClear="false"
                                            :maxLimit="1"
                                            initValue=""
                                            placeholder=""
                                            className="w-[44px] h-[44px] text-center text-primary text-xl"
                                        />
                                    </div>
                                </column>
                                
                                <Column md="6">
                                    <Button
                                        variant="soft"
                                        width="fluid"
                                        prefix="SvgClock"
                                    >
                                        Resend 03:28
                                    </Button>
                                </Column>

                                <Column md="6">
                                    <Button
                                        variant="filled"
                                        width="fluid"
                                    >
                                        Verify
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
            </AuthFlow>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        // `<Grid`,
                        // `  :fluid="${args.fluid}"`,
                        // `  :gap="${args.gap}"`,
                        // `  :className="${args.className}"`,
                        // `>`,
                        // `  <Row`,
                        // `    :justify="${args.justify}"`,
                        // `    :alignItem="${args.alignItem}"`,
                        // `    :hasGap="${args.hasGap}"`,
                        // `  >`,
                        // `    <Column`,
                        // `      v-for="(index) in 12"`,
                        // `      :key="index"`,
                        // `      :align="${args.align}"`,
                        // `      :xs="${args.xs}"`,
                        // `      :sm="${args.sm}"`,
                        // `      :md="${args.md}"`,
                        // `      :lg="${args.lg}"`,
                        // `      :xl="${args.xl}"`,
                        // `    >`,
                        // `      <div`,
                        // `        class="diagonal-background"`,
                        // `        style="border:1px solid #ccc; padding:8px 16px;"`,
                        // `      >`,
                        // `        Column {{index}}`,
                        // `      </div>`,
                        // `    </Column>`,
                        // `  </Row>`,
                        // `</Grid>`,
                    ].join("\n").trim();
                }
            }
        }
    },
};

//==== 設定密碼 ====//
export const authFlowSetPasswordStory = {
    name: '設定密碼',
    args: {
        //props
        bgColorSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/login-bg-color-DyeTUDCt.png",
        bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
        title:"Set a Password",
        className:"",

        //slot
        description: `<p class="text-neutral-600">Please set a new password for your account.</p>`,
        form:`<div class="ded-login-content-form"><Grid fluid><Row justify="flex-end"><Column md="12"><Input className="text-primary" type="text" prefix="SvgMail" initValue="" label="Email Address" placeholder="type email" :hint="{ description: 'Description', error: '' }" /></Column><Column md="12"><Button variant="filled" width="fluid">Submit</Button></Column></Row></Grid></div>`,
    },
    render: (args) => ({
        components: { AuthFlow, Grid, Row, Column, Checkbox, Button, Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :className="args.className"
            >
                <template #description>
                    <p class="text-neutral-600">
                        Please set a new password for your account.
                    </p>
                </template>
                
                <template #form>
                    <div class="ded-login-content-form">
                        <Grid fluid>
                            <Row justify="flex-end" hasGap>
                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="password"
                                        prefix="SvgLock"
                                        initValue=""
                                        label="Password"
                                        placeholder="type password"
                                    />
                                </Column>

                                <Column md="12">
                                    <Input
                                        className="text-primary"
                                        type="password"
                                        prefix="SvgLock"
                                        initValue=""
                                        label="Password Confirm"
                                        placeholder="type password"
                                    />
                                </Column>

                                <Column md="6">
                                    <Button
                                        variant="soft"
                                        width="fluid"
                                    >
                                        Reset
                                    </Button>
                                </Column>

                                <Column md="6">
                                    <Button
                                        variant="filled"
                                        width="fluid"
                                    >
                                        Confirm
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </div>
                </template>
            </AuthFlow>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        // `<Grid`,
                        // `  :fluid="${args.fluid}"`,
                        // `  :gap="${args.gap}"`,
                        // `  :className="${args.className}"`,
                        // `>`,
                        // `  <Row`,
                        // `    :justify="${args.justify}"`,
                        // `    :alignItem="${args.alignItem}"`,
                        // `    :hasGap="${args.hasGap}"`,
                        // `  >`,
                        // `    <Column`,
                        // `      v-for="(index) in 12"`,
                        // `      :key="index"`,
                        // `      :align="${args.align}"`,
                        // `      :xs="${args.xs}"`,
                        // `      :sm="${args.sm}"`,
                        // `      :md="${args.md}"`,
                        // `      :lg="${args.lg}"`,
                        // `      :xl="${args.xl}"`,
                        // `    >`,
                        // `      <div`,
                        // `        class="diagonal-background"`,
                        // `        style="border:1px solid #ccc; padding:8px 16px;"`,
                        // `      >`,
                        // `        Column {{index}}`,
                        // `      </div>`,
                        // `    </Column>`,
                        // `  </Row>`,
                        // `</Grid>`,
                    ].join("\n").trim();
                }
            }
        }
    },
};