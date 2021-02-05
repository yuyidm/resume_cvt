(function () {
    let cvt = 'cvt_single_20201227',
        version = 'v1609057099931';

    // 模板数据样式
    let cvtStyle = Vue.extend({
        name: 'cvtStyle',
        mixins: [resumeMixin],
        // language=Vue
        template: `<div class="${cvt} cvt_swap">
    <div data-minimum class="data-minimum cvt_top_swap">
        <div class="top_left">
            <div class="text_000_name_1" v-style.fs="fontSize + 14"
                 v-if="m001.first_name || m001.last_name"
            >{{ m001.last_name }}{{ m001.first_name }}
            </div>
            <div class="text_000_name_2" v-style.fs="fontSize + 14"
                 v-if="m001.first_name_pinyin || m001.last_name_pinyin"
            >{{ m001.first_name_pinyin }}-{{ m001.last_name_pinyin }}
            </div>
            <div class="text_000_name_3" v-style.fs="fontSize - 2"
                 v-if="m001.english_name">
                {{ m001.english_name }}
            </div>
        </div>
        <div class="top_right ">
            <div>
                <div class="swap_flex_ai" v-style.mb="padding - 10" v-if="m001.user_qq">
                    <div class="icon_qq"></div>
                    <div class="text_000 " v-style.fs="fontSize - 2">{{ m001.user_qq }}</div>
                </div>
                <div class="swap_flex_ai" v-style.mb="padding - 10" v-if="m001.user_wechat">
                    <div class="icon_wx"></div>
                    <div class="text_000 " v-style.fs="fontSize - 2">{{ m001.user_wechat }}</div>
                </div>
                <div class="swap_flex_ai" v-style.mb="padding - 10" v-if="m001.user_phone">
                    <div class="icon_phone"></div>
                    <div class="text_000 " v-style.fs="fontSize - 2">{{ m001.user_phone }}</div>
                </div>
                <div class="swap_flex_ai" v-style.mb="padding - 10" v-if="m001.user_email">
                    <div class="icon_email"></div>
                    <div class="text_000  icon" v-style.fs="fontSize - 2">{{ m001.user_email }}</div>
                </div>
            </div>
        </div>
    </div>
    <div data-minimum class="data-minimum text_000_bold" style="letter-spacing: 0.6em;"
         v-style.fs="fontSize - 2" v-style.mb="padding">
        个人信息
    </div>
    <div data-minimum class="data-minimum text_000"
         v-style.fs="fontSize - 2">
        <span v-if="m001.user_birth" v-style.mb="padding - 10" style="min-width: 180px">
            出生日期：{{ m001.user_birth }}
        </span>
        <span v-if="m001.user_sex" v-style.mb="padding - 10" style="min-width: 180px">
            性别：{{ m001.user_sex }}
        </span>
        <span v-if="m001.marriage_status" v-style.mb="padding - 10" style="min-width: 180px">
            婚姻状况：{{ m001.marriage_status }}
        </span>
        <span v-if="m001.last_education" v-style.mb="padding - 10" style="min-width: 180px">
            最高学历：{{ m001.last_education }}
        </span>
        <span v-if="m001.last_degree" v-style.mb="padding - 10" style="min-width: 180px">
            最高学位：{{ m001.last_degree }}学位
        </span>
        <span v-if="m001.health_condition" v-style.mb="padding - 10" style="min-width: 180px">
            健康情况：{{ m001.health_condition }}
        </span>
        <span v-if="m001.political_code" v-style.mb="padding - 10" style="min-width: 180px">
            政治面貌：{{ m001.political_code }}
        </span>
        <span v-if="m001.work_status" v-style.mb="padding - 10" style="min-width: 180px">
            当前状态：{{ m001.work_status }}
        </span>
    </div>
    <div data-minimum class="data-minimum text_000"
         v-style.fs="fontSize - 2" v-style.mb="padding - 10"
         v-if="m001.professional_title">
        职称：
        <template v-for="(item, index) in m001.professional_title">
            {{ item }}
            <template v-if="index !== m001.professional_title.length - 1">、</template>
        </template>
    </div>
    <div data-minimum class="data-minimum text_000"
         v-style.fs="fontSize - 2" v-style.mb="padding - 10"
         v-if="m001.user_interests">
        兴趣爱好：{{ m001.user_interests }}
    </div>
    <div data-minimum class="data-minimum text_000"
         v-style.fs="fontSize - 2" v-style.mb="padding - 10"
         v-if="m001.user_native_region">
        籍贯：{{ m001.user_native_region.country }}-
        {{ m001.user_native_region.province }}-{{ m001.user_native_region.city }}
    </div>
    <div data-minimum class="data-minimum text_000"
         v-style.fs="fontSize - 2" v-style.mb="padding - 10"
         v-if="m001.user_birth_region">
        出生地：{{ m001.user_birth_region.country }}-
        {{ m001.user_birth_region.province }}-{{ m001.user_birth_region.city }}
    </div>
    <div data-minimum class="data-minimum text_000"
         v-style.fs="fontSize - 2" v-style.mb="padding - 10"
         v-if="m001.user_current_region">
        现居住地：{{ m001.user_current_region.country }}-
        {{ m001.user_current_region.province }}-{{ m001.user_current_region.city }}
    </div>
    <div data-minimum class="data-minimum text_000"
         v-style.fs="fontSize - 2" v-style.mb="padding"
         v-if="m001.current_address">
        具体居住地址：{{ m001.current_address }}
    </div>
    <template v-for="key in cvData.modules">
        <template v-if="key === 'm002'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m002.eduExp.length > 0"
            >院校教育

            </div>
            <template v-for="(data, index) in m002.eduExp">
                <div data-minimum class="data-minimum swap_flex_js"
                     v-style.mb="padding - 4"
                >
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                    >{{ data.unit_name }}
                    </div>
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                         v-if="data.begin_date"
                    >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                    </div>
                </div>
                <div data-minimum class="data-minimum swap_flex_fw"
                     v-style.mb="padding - 4"
                     v-if="data.college_name || data.major_name || data.degree_code || data.is_unified || data.education_form"
                >
                    <div class="text_000 item_after_1"
                         v-if="data.college_name"
                         v-style.fs="fontSize - 2"
                    >{{ data.college_name }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.major_name"
                         v-style.fs="fontSize - 2"
                    >{{ data.major_name }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.education_code"
                         v-style.fs="fontSize - 2"
                    >{{ data.education_code }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.degree_code"
                         v-style.fs="fontSize - 2"
                    >{{ data.degree_code }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.is_unified"
                         v-style.fs="fontSize - 2"
                    >{{ data.is_unified }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.education_form"
                         v-style.fs="fontSize - 2"
                    >{{ data.education_form }}教育
                    </div>
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_referee"
                >证明人：{{ data.education_referee }}
                </div>
                <div data-minimum class="data-minimum text_eee "
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_evaluation"
                >
                    <div>{{ data.education_evaluation }}</div>
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_course"
                >
                    <div>
                       主修课程：<template v-for="(course, idx) in data.education_course">{{ course.value }}
                            <template v-if="course.grade">（{{ course.grade }}）</template>
                            <template v-if="idx !== data.education_course.length - 1">、</template>
                        </template>
                    </div>
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_note"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.education_note)"
                                class-name="text_eee"
                                :html="html"
                                :padding="padding - 10"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.project_introduction)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 8"
                        :font-size="fontSize - 2"
                ></cvtEditor>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.graduate_advisor"
                >
                    <div>导师姓名：{{ data.graduate_advisor }}</div>
                </div>
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.advisor_evaluation)" label="导师评价："
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m002.eduExp.length > 0"></div>
        </template>
        <template v-if="key === 'm003'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m003.conEdu.length > 0"
            >继续教育


            </div>
            <template v-for="(data, index) in m003.conEdu">
                <div data-minimum class="data-minimum swap_flex_js"
                     v-style.mb="padding - 4"
                >
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                    >{{ data.unit_name }}
                    </div>
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                         v-if="data.begin_date"
                    >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                    </div>
                </div>
                <div data-minimum class="data-minimum swap_flex_fw"
                     v-style.mb="padding - 4"
                     v-if="data.education_type || data.education_form || data.class_hours || data.course_field"
                >
                    <div class="text_000 item_after_1"
                         v-if="data.course_field"
                         v-style.fs="fontSize - 2"
                    >课程方向：{{ data.course_field }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.education_type"
                         v-style.fs="fontSize - 2"
                    >教育类型：{{ data.education_type }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.education_form"
                         v-style.fs="fontSize - 2"
                    >教育形式：{{ data.education_form }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.class_hours"
                         v-style.fs="fontSize - 2"
                    >学习时长{{ data.class_hours }}
                    </div>
                    
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_evaluation"
                >
                    <div>{{ data.education_evaluation }}</div>
                </div>
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.course_content)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.education_note)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m003.conEdu.length > 0"></div>
        </template>
        <template v-if="key === 'm004'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m004.workExp.length > 0"
            >工作经历

            </div>
            <template v-for="(data, index) in m004.workExp">
                <div data-minimum class="data-minimum swap_flex_js"
                     v-style.mb="padding - 4"
                >
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                    >{{ data.unit_name }}
                    </div>
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                         v-if="data.begin_date"
                    >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                    </div>
                </div>
                <div data-minimum class="data-minimum text_000"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.work_position"
                >{{ data.work_position }}
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.work_referee"
                >证明人：{{ data.work_referee }}
                </div>

                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.job_duty)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.job_content)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.leaving_reason)" label="离职原因："
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m004.workExp.length > 0"></div>
        </template>
        <template v-if="key === 'm005'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m005.paperPub.length > 0 || m005.bookPub.length > 0"
            >文献论著


            </div>
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m005.bookPub.length > 0"
            >发表的文献
            </div>
            <template v-for="(data, index) in m005.paperPub">
                <div data-minimum class="data-minimum text_000"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div class="swap_flex_js">
                        <div>{{ data.quoted }}</div>
                        <div>{{ data.type }}</div>
                    </div>
                </div>
            </template>
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m005.bookPub.length > 0"
            >参编论著
            </div>
            <template v-for="(data, index) in m005.bookPub">
                <div data-minimum class="data-minimum text_000"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div>{{ data.quoted }}</div>
                </div>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m005.paperPub.length > 0 || m005.bookPub.length > 0"></div>
        </template>
        <template v-if="key === 'm006'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m006.projectPar.length > 0"
            >参与课题

            </div>
            <template v-for="(data, index) in m006.projectPar">
                <div data-minimum class="data-minimum swap_flex_js"
                     v-style.mb="padding - 4"
                >
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                    >{{ data.project_name }}
                    </div>
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                         v-if="data.begin_date"
                    >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                    </div>
                </div>

                <div data-minimum class="data-minimum swap_flex_fw"
                     v-style.mb="padding - 4"
                     v-if="data.project_type || data.project_cycle || data.project_fund "
                >
                    <div class="text_000 item_after_2"
                         v-if="data.project_type"
                         v-style.fs="fontSize - 2"
                    >课题类型：{{ data.project_type }}
                    </div>
                    <div class="text_000 item_after_2"
                         v-if="data.project_cycle"
                         v-style.fs="fontSize - 2"
                    >周期：{{ data.project_cycle }}
                    </div>
                    <div class="text_000 item_after_2"
                         v-if="data.project_fund"
                         v-style.fs="fontSize - 2"
                    >经费：{{ data.project_fund }}
                    </div>
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_number"
                >批准号：{{ data.project_number }}
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_field"
                >研究方向：{{ data.project_field }}
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.approval_unit"
                >审批单位：{{ data.approval_unit }}
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.skill_practice && data.skill_practice.length > 0"
                >技能实践情况：
                    <template v-for="(practice, idx) in data.skill_practice">{{ practice }}
                        <template v-if="idx !== data.skill_practice.length - 1">、</template>
                    </template>
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_role"
                >课题角色：{{ data.project_role }}
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.role_desc"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.role_desc)" label="课题角色描述："
                                class-name="text_eee"
                                :html="html"
                                :padding="padding - 10"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>
                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.contribution_content"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.contribution_content)" label="课题贡献："
                                class-name="text_eee"
                                :html="html"
                                :padding="padding - 10"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m006.projectPar.length > 0"></div>
        </template>
        <template v-if="key === 'm007'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m007.patent.length > 0 || m007.standard.length || m007.copyright.length"
            >知识产权

            </div>
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m007.patent.length > 0"
            >专利
            </div>
            <template v-for="(data, index) in m007.patent">
                <div data-minimum class="data-minimum text_000"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div class="swap_flex_js">
                        <div>{{ data.quoted }}</div>
                        <div>{{ data.type }}</div>
                    </div>
                </div>
            </template>
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m007.standard.length > 0"
            >标准规范
            </div>
            <template v-for="(data, index) in m007.standard">
                <div data-minimum class="data-minimum text_000"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div>{{ data.quoted }}</div>
                </div>
            </template>
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m007.copyright.length > 0"
            >著作权
            </div>
            <template v-for="(data, index) in m007.copyright">
                <div data-minimum class="data-minimum text_000"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div>{{ data.quoted }}</div>
                </div>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m007.patent.length > 0 || m007.standard.length || m007.copyright.length"></div>
        </template>
        <template v-if="key === 'm008'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m008.awards.length"
            >获评奖项

            </div>
            <template v-for="(data, index) in m008.awards">
                <div data-minimum class="data-minimum swap_flex_js"
                     v-style.mb="padding - 4"
                     v-if="data.award_name"
                >{{ data.award_name }}
                </div>

                <div data-minimum class="data-minimum swap_flex_fw"
                     v-style.mb="padding - 4"
                     v-if="data.award_level || data.award_order"
                >
                    <div class="text_000 item_after_2"
                         v-style.fs="fontSize - 2"
                    >{{ data.award_rank }}
                    </div>
                    <div class="text_000 item_after_2"
                         v-if="data.award_level"
                         v-style.fs="fontSize - 2"
                    >{{ data.award_level }}
                    </div>
                    <div class="text_000 item_after_2"
                         v-if="data.award_order"
                         v-style.fs="fontSize - 2"
                    >{{ data.award_order }}
                    </div>
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.award_note"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.award_note)" label="详细信息："
                                class-name="text_eee"
                                :html="html"
                                :padding="padding - 10"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m008.awards.length > 0"></div>
        </template>
        <template v-if="key === 'm009'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m009.show"
            >求职意向
            </div>
            <div class="swap_flex_fw" v-style.mb="padding - 4"
            >
                <div data-minimum style="padding-right: 20px;" class="data-minimum text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-if="m009.show && m009.work_position"
                >{{ m009.work_position }}
                </div>
                <div data-minimum style="padding-right: 20px;" class="data-minimum text_000"
                     v-style.fs="fontSize - 2"
                     v-if="m009.show && m009.user_intention_region"
                >意向地区：{{ m009.user_intention_region.country }}-{{ m009.user_intention_region.province }}-{{
                    m009.user_intention_region.city }}
                </div>
                <div data-minimum style="padding-right: 20px;" class="data-minimum text_000"
                     v-style.fs="fontSize - 2"
                     v-if="m009.show && m009.job_type"
                >工作类型：{{ m009.job_type }}
                </div>
                <div data-minimum style="padding-right: 20px;" class="data-minimum text_000"
                     v-style.fs="fontSize - 2"
                     v-if="m009.show && m009.salary_info"
                >期望薪资：{{ (m009.salary_info.min === 0 && m009.salary_info.max === 0) ? '面议' : (m009.salary_info.min + '-' + m009.salary_info.max) }}
                </div>
                <div data-minimum style="padding-right: 20px;" class="data-minimum text_000"
                     v-style.fs="fontSize - 2"
                     v-if="m009.show && m009.arrival_time"
                >到岗时间：{{ m009.arrival_time }}
                </div>
            </div>
            
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m009.show"></div>
        </template>
        <template v-if="key === 'm010'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m010.organ.length"
            >社团组织

            </div>
            <template v-for="(data, index) in m010.organ">
                <div data-minimum class="data-minimum swap_flex_js"
                     v-style.mb="padding - 4"
                >
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                    >{{ data.organization_name }}
                    </div>
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                         v-if="data.begin_date"
                    >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                    </div>
                </div>

                <div data-minimum class="data-minimum swap_flex_fw"
                     v-style.mb="padding - 4"
                     v-if="data.organization_type || data.service_position"
                >
                    <div class="text_000 item_after_2"
                         v-if="data.organization_type"
                         v-style.fs="fontSize - 2"
                    >{{ data.organization_type }}
                    </div>
                    <div class="text_000 item_after_2"
                         v-if="data.service_position"
                         v-style.fs="fontSize - 2"
                    >{{ data.service_position }}
                    </div>
                </div>

                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.duty_performance)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m010.organ.length > 0"></div>
        </template>
        <template v-if="key === 'm011'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m011.certificate.length"
            >荣誉证书

            </div>
            <template v-for="(data, index) in m011.certificate">
                <div data-minimum class="data-minimum swap_flex_js"
                     v-style.mb="padding - 4"
                >
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                    >{{ data.certificate_name }}
                    </div>
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                    >{{ data.issuance_time }}
                    </div>
                </div>
                <div data-minimum class="data-minimum text_000"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.issuance_unit"
                >发证机关：{{ data.issuance_unit }}
                </div>
                <div data-minimum class="data-minimum text_000"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.certificate_number"
                >证书编码：{{ data.certificate_number }}
                </div>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m011.certificate.length > 0"></div>
        </template>
        <template v-if="key === 'm012'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m012.skills.length"
            >技术能力
            </div>
            <div data-minimum class="data-minimum skills swap_flex_fw">
                <div v-for="(data, index) in m012.skills" class="skill_item">
                    <div class="text_000 skill"
                         v-style.fs="fontSize - 2"
                         v-style.mb="padding - 10"
                    >{{ data.skill_name }}
                    </div>
                    <div class="level" v-style.mb="padding">
                        <div :style="{width: data.skill_level / 4 * 100 + '%'}"></div>
                    </div>
                </div>
            </div>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m012.skills.length"></div>
        </template>
        <template v-if="key === 'm013'">
            <div data-minimum class="data-minimum text_000_bold text_title"
                 v-style.mb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="m013.selfEva.length"
            >自我评价

            </div>
            <template v-for="(data, index) in m013.selfEva">
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.evaluation_content)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                 v-if="m013.selfEva.length > 0"></div>
        </template>
        <template v-if="key === 'm014'">
            <template v-for="(data, index) in m014.otherModule">
                <div data-minimum class="data-minimum text_000_bold text_title"
                     v-style.mb="padding - 8"
                     v-style.fs="fontSize - 2"
                >{{ data.module_name }}

                </div>
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.module_content)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
            </template>
        </template>
    </template>
</div>
        `,
        computed: {
            /**
             * m012的技能归类
             */
            classifiedSkills() {
                let newM012 = {};
                this.m012.skills.forEach((item, index) => {
                    if (item.type_name in newM012) {
                    } else {
                        newM012[item.type_name] = [];
                    }
                    newM012[item.type_name].push({
                        skill_level: item.skill_level,
                        skill_name: item.skill_name,
                        skill_length: item.skill_length,
                    });
                });

                let tmpList = [];
                let final = []; //其他技能

                for (let key in newM012) {
                    let value = newM012[key];

                    if (key.indexOf('其他') === -1) {
                        tmpList.push({
                            type_name: key,
                            arr: value,
                        });
                    } else {
                        final.push({
                            type_name: key,
                            arr: value,
                        });
                    }
                }

                return tmpList.concat(final);
            },
        },
    });

    // 模板内容容器
    let swap = Vue.extend({
        mixins: [swapMixin],
        props: ['nodes'],
        watch: {
            nodes() {
                this.cutPage();
            },
        },
        computed: {},
        // language=Vue
        template: `
            <div ref="swap" class="${cvt} cvt_swap"></div>
        `,
        methods: {
            cutPage() {
                // 左侧区域
                let pages = [],
                    page = [],
                    pageDom = [];
                this.nodes.forEach(node => {
                    node = node.cloneNode(true);
                    this.$refs.swap.appendChild(node);

                    if (this.$refs.swap.offsetHeight > 1124) {
                        this.$refs.swap.removeChild(node);
                        pages.push(page);
                        pageDom.push(this.$refs.swap.cloneNode(true));
                        this.$refs.swap.innerHTML = '';
                        page = [];
                        this.$refs.swap.appendChild(node);
                    }
                    page.push(node);
                });
                if (page.length > 0) {
                    pages.push(page);
                    pageDom.push(this.$refs.swap.cloneNode(true));
                    this.$refs.swap.innerHTML = '';
                }

                // 生成每一页简历
                let pdf = [];
                let div = document.createElement('div');
                div.classList.add('pdf');
                pageDom.forEach(node => {
                    div.appendChild(node);
                    pdf.push(div.cloneNode(true));
                    div.innerHTML = '';
                });

                this.$emit('pdf', pdf);
            },
        },
    });

    let component = {
        name: cvt,
        data() {
            return {
                cvt,
                version,
                node: [],
                page: [],
            };
        },
        mixins: [cvtMixin],
        components: {
            cvtStyle,
            swap,
        },
        // language=Vue
        template: `
            <div class="cv__swap">
            <!-- 视图 -->
            <div ref="cvViewSwap" class="__cv__view__swap" :class="cvType" :style="viewSwapStyle"></div>

            <!-- 模板视图 -->
            <div class="__cv__template__swap">
                <cvt-style @minimum-node="node = $event" ref="cvtStyle" :cv-data="cvData"></cvt-style>
                <swap ref="swap" @pdf="pages = $event" :nodes="node" :cv-data="cvData"></swap>
            </div>
            </div>
        `,
    };

    RESUMES[cvt] = {
        // 编号
        cvt,
        // 版本
        version,
        // 配色
        colors: [],
        // 间距基准值
        padding: 20,
        // 字体大小基准值
        fontSize: 16,
        // 组件
        component,
    };
})();
