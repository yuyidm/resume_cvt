(function () {
    let cvt = 'cvt_single_20201218',
        version = 'v1608275157312';

    // 模板数据样式
    let cvtStyle = Vue.extend({
        name: 'cvtStyle',
        mixins: [resumeMixin],
        // language=Vue
        //language=HTML
        template: `<div class="${cvt} cvt_swap">
<div data-minimum class="data-minimum top swap_flex" v-style.mb="padding + 20">
    <div class="top_left swap_flex">
        <div class="image" v-if="m001.user_photo">
            <div>
                <img crossorigin="anonymous" :src="m001.user_photo" alt="">
            </div>
        </div>
        <div class="identity">
            <div class="text_bold" v-style.fs="fontSize + 10" v-style.color="color" v-style.mb="padding - 10"
                 v-if="m001.first_name || m001.last_name">
                {{ m001.last_name }}{{ m001.first_name }}
            </div>
            <div class="profession swap_flex" v-style.fs="fontSize - 2" v-style.mb="padding - 10">
                <div class="text_000"
                     v-if="m009.work_position">
                    {{ m009.work_position }}
                </div>
                <div class="text_000"
                     v-if="m001.last_education">
                    {{ m001.last_education }}
                </div>
                <div class="text_000"
                     v-if="m001.last_degree">
                    {{ m001.last_degree }}
                </div>
            </div>
            <div class="swap_flex">
                <div class="text_000" v-style.fs="fontSize - 2" :style="{'margin-right': (padding - 10) + 'px'}"
                     v-if="m001.english_name">
                    {{ m001.english_name }}
                </div>
                <div clas="text_000" v-style.fs="fontSize - 2"
                     v-if="m001.first_name_pinyin && m001.last_name_pinyin">
                    {{ m001.first_name_pinyin }} {{ m001.last_name_pinyin }}
                </div>
            </div>
        </div>
    </div>
    <div class="top_right swap_flex">
        <div v-style.fs="fontSize - 1" v-style.color="color" v-style.mb="padding - 10">
            联系方式
        </div>
        <div class="text_000" v-style.fs="fontSize - 2"  v-style.mb="padding - 10"
             v-if="m001.user_phone">
            Tel: {{ m001.user_phone }}
        </div>
        <div class="text_000" v-style.fs="fontSize - 2"  v-style.mb="padding - 10"
             v-if="m001.user_wechat">
            WX: {{ m001.user_wechat }}
        </div>
        <div class="text_000" v-style.fs="fontSize - 2"  v-style.mb="padding - 10"
             v-if="m001.user_qq">
            QQ: {{ m001.user_qq }}
        </div>
        <div class="text_000" v-style.fs="fontSize - 2"  v-style.mb="padding - 10"
             v-if="m001.user_email">
            {{ m001.user_email }}
        </div>
    </div>
</div>
    
<div data-minimum class="data-minimum text_bold"
     v-style.fs="fontSize" v-style.color="color" v-style.mb="padding">
    基本信息
</div>
    
<div data-minimum class="data-minimum text_000 swap_flex"
     v-style.fs="fontSize - 2" v-style.mb="padding - 10">
    <div v-if="m001.user_birth" style="width: 40%">
        出生日期：{{ m001.user_birth }}
    </div>
    <div v-if="m001.user_sex" style="width: 40%">
        性别：{{ m001.user_sex }}
    </div>
    <div v-if="m001.health_condition">
        健康情况：{{ m001.health_condition }}
    </div>
</div>

<div data-minimum class="data-minimum text_000 swap_flex"
     v-style.fs="fontSize - 2" v-style.mb="padding - 10">
    <div v-if="m001.marriage_status"  style="width: 40%">
        婚姻状态：{{ m001.marriage_status }}
    </div>
    <div v-if="m001.political_code" style="width: 40%">
        政治面貌：{{ m001.political_code }}
    </div>
    <div v-if="m001.work_status">
        当前状态：{{ m001.work_status }}
    </div>
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
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m002.eduExp && m002.eduExp.length > 0">
            院校教育
        </div>

        <template v-for="(data, index) in m002.eduExp"
        >
            <div data-minimum class="data-minimum education_head swap_flex">
                <div class="time text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-if="data.begin_date"
                >
                    {{ data.begin_date.start }}-<br>{{ data.begin_date.end }}
                </div>

                <div class="edu_summary"
                     v-style.pb="padding" :style="{borderLeftColor: color}">
                    <div class="circle" :style="{borderColor: color}"></div>
                    <div class="text_000_bold" v-style.fs="fontSize - 2" v-style.mb="padding - 8"
                         v-if="data.unit_name">
                        {{ data.unit_name }}
                    </div>
                    <div class="swap_flex flex_wrap text_000" v-style.fs="fontSize - 2" v-style.mb="padding - 8">
                        <div class="item_after_1" v-if="data.college_name">
                            {{ data.college_name }}
                        </div>
                        <div class="item_after_1" v-if="data.major_name">
                            {{ data.major_name }}
                        </div>
                        <div class="item_after_1" v-if="data.education_code">
                            {{ data.education_code }}
                        </div>
                        <div class="item_after_1" v-if="data.degree_code">
                            {{ data.degree_code }}
                        </div>
                        <div class="item_after_1" v-if="data.is_unified">
                            {{ data.is_unified }}
                        </div>
                        <div class="item_after_1" v-if="data.education_form">
                            {{ data.education_form }}教育
                        </div>
                    </div>
                    <div class="text_000" v-style.fs="fontSize - 2"
                         v-if="data.education_referee">
                        证明人：{{ data.education_referee }}
                    </div>
                </div>
            </div>

            <div data-minimum class="data-minimum education_content text_eee item_before_eee" v-style.fs="fontSize - 2" v-style.pb="padding"
                 v-if="data.education_evaluation" :style="{borderLeftColor: color}">
                <div>{{ data.education_evaluation }}</div>
            </div>

            <div data-minimum class="data-minimum education_content text_eee item_before_eee" v-style.pb="padding"
                 v-if="data.project_introduction" :style="{borderLeftColor: color}">
                <div>
                    <cvtEditor :index="idx"
                               v-for="(html, idx) in cvtEditor(data.project_introduction)"
                               class-name="text_eee"
                               :html="html"
                               :padding="0"
                               :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>

            <div data-minimum class="data-minimum education_content text_eee item_before_eee" v-style.fs="fontSize - 2" v-style.pb="padding"
                 v-if="data.education_course && data.education_course.length > 0" :style="{borderLeftColor: color}">
                <div>
                    主修课程：<template v-for="(course, idx) in data.education_course">{{ course.value }}<template v-if="course.grade">（{{ course.grade }}）</template>
                        <template v-if="idx !== data.education_course.length - 1">、</template>
                    </template>
                </div>
            </div>

            <div data-minimum class="data-minimum education_content text_eee item_before_eee" v-style.fs="fontSize - 2" v-style.pb="padding"
                 v-if="data.graduate_advisor" :style="{borderLeftColor: color}">
                <div>导师名称：{{ data.graduate_advisor }}</div>
            </div>

            <div data-minimum class="data-minimum education_content text_eee item_before_eee" v-style.fs="fontSize - 2" v-style.pb="padding"
                 v-if="data.advisor_evaluation" :style="{borderLeftColor: color}">
                <div>
                    <cvtEditor :index="idx"
                               v-for="(html, idx) in cvtEditor(data.advisor_evaluation)" label="导师评价："
                               class-name="text_eee"
                               :html="html"
                               :padding="0"
                               :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>

            <div data-minimum class="data-minimum education_content text_eee item_before_eee" v-style.pb="padding"
                 v-if="data.education_note" :style="{borderLeftColor: color}">
                <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.education_note)"
                        class-name="text_eee"
                        :html="html"
                        :padding="0"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>
            
        </template>
    </template>

    <template v-if="key === 'm004'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m004.workExp.length > 0">
            工作经历
        </div>
        
        <template v-for="(data, index) in m004.workExp"
        >
            <div data-minimum class="data-minimum work_head swap_flex">
                <div class="time text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-if="data.begin_date"
                >
                    {{ data.begin_date.start }}-<br>{{ data.begin_date.end }}
                </div>
        
                <div class="work_summary"
                     v-style.pb="padding" :style="{borderLeftColor: color}">
            
                    <div class="circle" :style="{borderColor: color}"></div>
                    
                    <div class="swap_flex flex_wrap text_000" v-style.fs="fontSize - 2"
                         v-if="data.unit_name || data.work_position || data.work_referee ">
                        <div v-if="data.unit_name" :style="{'margin-right': (padding + 10) + 'px'}">
                            {{ data.unit_name }}
                        </div>
                        <div v-if="data.work_position" :style="{'margin-right': (padding + 10) + 'px'}">
                            {{ data.work_position }}
                        </div>
                        <div v-if="data.work_referee">
                            证明人：{{ data.work_referee }}
                        </div>
                    </div>
                </div>
            </div>
        
            <div data-minimum class="data-minimum work_content text_eee item_before_eee"
                 v-style.pb="padding"
                 v-if="data.job_duty"
                 :style="{borderLeftColor: color}"
            >
                <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.job_duty)"
                        class-name="text_eee"
                        :html="html"
                        :padding="0"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>
        
            <div data-minimum class="data-minimum work_content text_eee item_before_eee"
                 v-style.pb="padding"
                 v-if="data.job_content"
                 :style="{borderLeftColor: color}"
            >
                <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.job_content)"
                        class-name="text_eee"
                        :html="html"
                        :padding="0"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>

            <div data-minimum class="data-minimum content text_eee item_before_eee"
                 v-style.pb="padding"
                 v-if="data.leaving_reason"
                 :style="{borderLeftColor: color}"
            >
                <div>
                    <cvtEditor :index="idx"
                               v-for="(html, idx) in cvtEditor(data.leaving_reason)"
                               class-name="text_eee"
                               :html="html"
                               :padding="0"
                               :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>
        </template>
    </template>

    <template v-if="key === 'm012'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m012 && m012.skills && m012.skills.length && classifiedSkills && classifiedSkills.length">
            技能能力
        </div>
            
        <template v-if="m012 && m012.skills && classifiedSkills"
                  v-for="(item, index) in classifiedSkills"
        >
        
            <div data-minimum class="data-minimum text_000_bold" v-style.mb="padding - 4" v-style.fs="fontSize - 2">
                {{ item.type_name }}
            </div>
            
            <div data-minimum class="data-minimum swap_flex flex_wrap" v-style.mb="4">
                <div class="one_skill" v-style.mb="padding"
                     v-for="(skill) in item.arr">
                    
                    <div class="text_eee"
                         v-style.fs="fontSize - 2"
                    >{{ skill.skill_name }}
                    </div>
                
                    <div class="skill" :style="{borderColor: color}">
                        <div class="skill_length"
                             :style="{width: (skill.skill_level / skill.skill_length) * 100 + '%', 'background-color': color}">
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </template>

    <template v-if="key === 'm011'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m011.certificate.length > 0">
            荣誉证书
        </div>
        
        <template v-for="(data, index) in m011.certificate"
        >
            <div data-minimum class="data-minimum certificate_head swap_flex">
                <div class="time text_000_bold"
                     v-style.fs="fontSize - 2">
                    {{ data.issuance_time }}
                </div>
                <div class="name"
                     v-style.pb="padding" :style="{borderLeftColor: color}">
                    
                    <div class="circle" :style="{borderColor: color}"></div>
        
                    <div class="text_000_bold" v-style.fs="fontSize - 2"
                         v-if="data.certificate_name">
                        {{ data.certificate_name }}
                    </div>
                </div>
            </div>
        
            <div data-minimum class="data-minimum text_eee certificate_content"
                 v-style.pb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.certificate_number"
                 :style="{borderLeftColor: color}"
            >证书编码：{{ data.certificate_number }}
            </div>
        
            <div data-minimum class="data-minimum text_eee certificate_content"
                 v-style.pb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.issuance_unit"
                 :style="{borderLeftColor: color}"
            >发证机关：{{ data.issuance_unit }}
            </div>
        </template>
    </template>

    <template v-if="key === 'm003'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m003.conEdu.length > 0">
            继续教育
        </div>
        
        <template v-for="(data, index) in m003.conEdu"
        >
            <div data-minimum class="data-minimum con_edu_head swap_flex">
                <div class="time text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-if="data.begin_date"
                >
                    {{ data.begin_date.start }}-<br>{{ data.begin_date.end }}
                </div>
        
                <div class="con_edu_summary"
                     v-style.pb="padding - 8" :style="{borderLeftColor: color}">
        
                    <div class="circle" :style="{borderColor: color}"></div>
        
                    <div class="text_000_bold" v-style.fs="fontSize - 2" v-style.mb="padding - 8"
                         v-if="data.unit_name">
                        {{ data.unit_name }}
                    </div>
                    
                    <div class="swap_flex flex_wrap text_000" v-style.fs="fontSize - 2"
                         v-if="data.education_type || data.education_form || data.class_hours || data.course_field">
                        <div class="item_after_1" v-if="data.education_type">
                            教育类型：{{ data.education_type }}
                        </div>
                        <div class="item_after_1" v-if="data.education_form">
                            教育形式：{{ data.education_form }}
                        </div>
                        <div class="item_after_1" v-if="data.class_hours">
                            学习时长{{ data.class_hours }}
                        </div>
                        <div class="item_after_1" v-if="data.course_field">
                            课程方向：{{ data.course_field }}
                        </div>
                    </div>
                </div>
            </div>
        
            <div data-minimum class="data-minimum con_edu_content text_eee item_before_eee"
                 v-style.fs="fontSize - 2" v-style.pb="padding"
                 v-if="data.education_evaluation"
                 :style="{borderLeftColor: color}">
                <div>{{ data.education_evaluation }}</div>
            </div>
        
            <div data-minimum class="data-minimum con_edu_content text_eee item_before_eee"
                 v-style.fs="fontSize - 2" v-style.pb="padding"
                 v-if="data.course_content"
                 :style="{borderLeftColor: color}">
                <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.course_content)"
                        class-name="text_eee"
                        :html="html"
                        :padding="0"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>
        
            <div data-minimum class="data-minimum con_edu_content text_eee item_before_eee"
                 v-style.fs="fontSize - 2" v-style.pb="padding"
                 v-if="data.education_note"
                 :style="{borderLeftColor: color}">
                <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.education_note)"
                        class-name="text_eee"
                        :html="html"
                        :padding="0"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>
        </template>
    </template>

    <template v-if="key === 'm005'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m005.paperPub.length > 0 || m005.bookPub.length > 0">
            学术成果 - 文献论著
        </div>
        
        <template v-for="(data, index) in m005.paperPub"
        >
            <div data-minimum class="data-minimum paper_pub_row swap_flex">
        
                <div class="left_title text_000_bold"
                     v-style.fs="fontSize - 2"
                     :style="{color: (index === 0 ? 'black' : 'transparent')}">
                    发表的文献
                </div>
            
                <div class="paper_detail"
                     v-style.pb="padding" :style="{borderLeftColor: color}">
                    <div class="circle" :style="{borderColor: color}"></div>
                    
                    <div class="text_000_bold text_normal_height" v-style.mb="padding - 8" v-style.fs="fontSize - 2"
                         v-if="data.quoted">
                        {{ data.quoted }}
                    </div>
                    <div class="text_eee"
                         v-if="data.type">
                        {{ data.type }}
                    </div>
                </div>
            </div>
        </template>
    
        <template v-for="(data, index) in m005.bookPub"
        >
            <div data-minimum class="data-minimum book_pub_row swap_flex">
        
                <div class="left_title text_000_bold"
                     v-style.fs="fontSize - 2"
                     :style="{color: (index === 0 ? 'black' : 'transparent')}">
                    参编论著
                </div>
        
                <div class="book_detail"
                     v-style.pb="padding" :style="{borderLeftColor: color}">
                    <div class="circle" :style="{borderColor: color}"></div>
        
                    <div class="text_000_bold text_normal_height" v-style.fs="fontSize - 2"
                         v-if="data.quoted">
                        {{ data.quoted }}
                    </div>
                </div>
            </div>
        </template>
    </template>

    <template v-if="key === 'm006'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m006.projectPar.length > 0">
            学术成果 - 参与课题
        </div>
        
        <template v-for="(data, index) in m006.projectPar"
        >
            <div data-minimum class="data-minimum project_head swap_flex">
                <div class="time text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-if="data.begin_date"
                >
                    {{ data.begin_date.start }}-<br>{{ data.begin_date.end }}
                </div>
        
                <div class="project_summary"
                     v-style.pb="padding - 8" :style="{borderLeftColor: color}">
                    
                    <div class="circle" :style="{borderColor: color}"></div>
        
                    <div class="text_000_bold" v-style.fs="fontSize - 2" v-style.mb="padding - 8"
                         v-if="data.project_name">
                        {{ data.project_name }}
                    </div>
        
                    <div class="swap_flex text_000 flex_wrap" v-style.fs="fontSize - 2"
                         v-if="data.project_type || data.project_cycle || data.project_fund">
                        <div class="item_after_1" v-if="data.project_type">
                            课题类型：{{ data.project_type }}
                        </div>
                        <div class="item_after_1" v-if="data.project_cycle">
                            周期：{{ data.project_cycle }}
                        </div>
                        <div class="item_after_1" v-if="data.project_fund">
                            经费：{{ data.project_fund }}
                        </div>
                    </div>
                </div>
            </div>
            <div data-minimum class="data-minimum text_eee project_content"
                 v-style.pb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.project_number"
                 :style="{borderLeftColor: color}"
            >批准号：{{ data.project_number }}
            </div>
            <div data-minimum class="data-minimum text_eee project_content"
                 v-style.pb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.project_field"
                 :style="{borderLeftColor: color}"
            >研究方向：{{ data.project_field }}
            </div>
        
            <div data-minimum class="data-minimum text_eee project_content"
                 v-style.pb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.approval_unit"
                 :style="{borderLeftColor: color}"
            >审批单位：{{ data.approval_unit }}
            </div>
            <div data-minimum class="data-minimum text_eee project_content"
                 v-style.pb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.project_role"
                 :style="{borderLeftColor: color}"
            >课题角色：{{ data.project_role }}
            </div>
            <div data-minimum class="data-minimum text_eee project_content text_normal_height"
                 v-style.pb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.skill_practice && data.skill_practice.length > 0"
                 :style="{borderLeftColor: color}"
            >技能实践情况：
                <template v-for="(practice, idx) in data.skill_practice">{{ practice }}
                    <template v-if="idx !== data.skill_practice.length - 1">、</template>
                </template>
            </div>
            <div data-minimum class="data-minimum text_eee item_before_eee project_content"
                 v-style.mb="padding"
                 v-style.fs="fontSize - 2"
                 v-if="data.contribution_content"
                 :style="{borderLeftColor: color}"
            >
                <div>
                    <cvtEditor :index="idx"
                               v-for="(html, idx) in cvtEditor(data.contribution_content)" label="课题贡献："
                               class-name="text_eee text_normal_height"
                               :html="html"
                               :padding="0"
                               :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>
            <div data-minimum class="data-minimum text_eee item_before_eee project_content"
                 v-style.pb="padding"
                 v-style.fs="fontSize - 2"
                 v-if="data.role_desc"
                 :style="{borderLeftColor: color}"
            >
                <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.role_desc)" label="课题角色描述："
                        class-name="text_eee text_normal_height"
                        :html="html"
                        :padding="0"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>
        </template>
    </template>

    <template v-if="key === 'm007'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m007.patent.length > 0 || m007.standard.length || m007.copyright.length">
            学术成果 - 知识产权
        </div>
        
        <template v-for="(data, index) in m007.patent"
        >
            <div data-minimum class="data-minimum patent_row swap_flex">
        
                <div class="left_title text_000_bold"
                     v-style.fs="fontSize - 2"
                     :style="{color: (index === 0 ? 'black' : 'transparent')}">
                    专利
                </div>
        
                <div class="patent_detail"
                     v-style.pb="padding" :style="{borderLeftColor: color}">
                    <div class="circle" :style="{borderColor: color}"></div>
        
                    <div class="text_000_bold" v-style.mb="padding - 8" v-style.fs="fontSize - 2"
                         v-if="data.type">
                        {{ data.type }}
                    </div>
                    <div class="text_eee text_normal_height"
                         v-if="data.quoted">
                        {{ data.quoted }}
                    </div>
                </div>
            </div>
        </template>
        
        <template v-for="(data, index) in m007.standard"
        >
            <div data-minimum class="data-minimum standard_row swap_flex">
        
                <div class="left_title text_000_bold"
                     v-style.fs="fontSize - 2"
                     :style="{color: (index === 0 ? 'black' : 'transparent')}">
                    标准规范
                </div>
        
                <div class="standard_detail"
                     v-style.pb="padding" :style="{borderLeftColor: color}">
                    <div class="circle" :style="{borderColor: color}"></div>
        
                    <div class="text_000_bold text_normal_height" v-style.fs="fontSize - 2"
                         v-if="data.quoted">
                        {{ data.quoted }}
                    </div>
                </div>
            </div>
        </template>
        
        <template v-for="(data, index) in m007.copyright"
        >
            <div data-minimum class="data-minimum copyright_row swap_flex">
        
                <div class="left_title text_000_bold"
                     v-style.fs="fontSize - 2"
                     :style="{color: (index === 0 ? 'black' : 'transparent')}">
                    著作权
                </div>
        
                <div class="copyright_detail"
                     v-style.pb="padding" :style="{borderLeftColor: color}">
                    <div class="circle" :style="{borderColor: color}"></div>
        
                    <div class="text_000_bold text_normal_height" v-style.fs="fontSize - 2"
                         v-if="data.quoted">
                        {{ data.quoted }}
                    </div>
                </div>
            </div>
        </template>
    </template>

    <template v-if="key === 'm008'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m008.awards.length">
            学术成果 - 获评奖项
        </div>
        
        <template v-for="(data, index) in m008.awards"
        >
            <div data-minimum class="data-minimum swap_flex awards_row">
                
                <div class="left_title text_000_bold"
                     v-style.fs="fontSize - 2"
                >{{ data.award_level }}
                </div>
                
                <div class="awards_detail"
                     v-style.pb="padding" :style="{borderLeftColor: color}">
                    
                    <div class="circle" :style="{borderColor: color}"></div>
        
                    <div class="text_000_bold text_normal_height" v-style.mb="padding - 8" v-style.fs="fontSize - 2"
                         v-if="data.award_name">
                        {{ data.award_name }}
                    </div>
                    
                    <div class="text_000 swap_flex flex_wrap" v-style.fs="fontSize - 2"
                         v-if="data.award_rank || data.award_level || data.award_order">
                        <div class="item_after_1"
                             v-if="data.award_rank">
                            奖项类别：{{ data.award_rank }}
                        </div>
                        
                        <div class="item_after_1"
                             v-if="data.award_level">
                            奖项等级：{{ data.award_level }}
                        </div>
            
                        <div class="item_after_1"
                             v-if="data.award_order">
                            奖项排名：第{{ data.award_order }}名
                        </div>
                    </div>
                </div>
            </div>
            
            <div data-minimum class="data-minimum text_eee awards_content"
                 v-style.pb="padding"
                 v-style.fs="fontSize - 2"
                 v-if="data.award_note"
                 :style="{borderLeftColor: color}"
            >
                <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.award_note)" label="详细信息："
                        class-name="text_eee text_normal_height"
                        :html="html"
                        :padding="0"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>
        </template>
    </template>

    <template v-if="key === 'm009'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m009.show">
            求职意向
        </div>
        
        <div data-minimum class="data-minimum intention swap_flex" v-style.mb="padding">
                <div class="position text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-if="m009.work_position">
                    {{ m009.work_position }}
                </div>
        
                <div class="intent_detail" :style="{borderLeftColor: color}">
        
                    <div class="circle" :style="{borderColor: color}"></div>
        
                    <div class="swap_flex text_eee" v-style.fs="fontSize - 2">
                        <div style="margin-right: 168px;">
                            <div v-if="m009.user_intention_region" v-style.mb="padding - 8">
                                意向地区：{{ m009.user_intention_region.country }}-{{ m009.user_intention_region.province }}-
                                {{ m009.user_intention_region.city }}
                            </div>
                            <div v-if="m009.salary_info">
                                期望薪资：{{ (m009.salary_info.min === 0 && m009.salary_info.max === 0) ? '面议' : (m009.salary_info.min + '-' + m009.salary_info.max) }}
                            </div>
                        </div>
                        <div>
                            <div v-if="m009.job_type" v-style.mb="padding - 8">
                                工作类型：{{ m009.job_type }}
                            </div>
                            <div v-if="m009.arrival_time">
                                到岗时间：{{ m009.arrival_time }}
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div> 
    </template>

    <template v-if="key === 'm010'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m010.organ.length > 0">
            社团组织
        </div>

        <template v-for="(data, index) in m010.organ"
        >
            <div data-minimum class="data-minimum organ_head swap_flex">
                <div class="time text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-if="data.begin_date"
                >
                    {{ data.begin_date.start }}-<br>{{ data.begin_date.end }}
                </div>

                <div class="organ_summary"
                     v-style.pb="padding - 8" :style="{borderLeftColor: color}">

                    <div class="circle" :style="{borderColor: color}"></div>

                    <div class="text_000_bold" v-style.fs="fontSize - 2" v-style.mb="padding - 8"
                         v-if="data.organization_name">
                        {{ data.organization_name }}
                    </div>
                    <div class="swap_flex flex_wrap text_000" v-style.fs="fontSize - 2"
                         v-if="data.organization_type || data.service_position">
                        <div class="item_after_1" v-if="data.organization_type">
                            {{ data.organization_type }}
                        </div>
                        <div class="item_after_1" v-if="data.service_position">
                            {{ data.service_position }}
                        </div>
                    </div>
                </div>
            </div>

            <div data-minimum class="data-minimum organ_content text_eee text_normal_height" v-style.fs="fontSize - 2" v-style.pb="padding"
                 v-if="data.duty_performance" :style="{borderLeftColor: color}">
                <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.duty_performance)"
                        class-name="text_eee"
                        :html="html"
                        :padding="0"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                </div>
            </div>
        </template>
    </template>

    <template v-if="key === 'm013'">
        <div data-minimum class="data-minimum text_bold"
             v-style.fs="fontSize" v-style.color="color" v-style.mb="padding - 4"
             v-if="m013.selfEva.length > 0">
            自我评价
        </div>
        
        <template v-for="(data, index) in m013.selfEva"
        >
            <cvtEditor :index="idx"
                v-for="(html, idx) in cvtEditor(data.evaluation_content)"
                class-name="text_eee text_normal_height"
                :html="html"
                :padding="padding - 10"
                :font-size="fontSize - 2"
            ></cvtEditor>
        </template>
    </template>

    <template v-if="key === 'm014'">
        <template v-for="(data, index) in m014.otherModule">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize"
                 v-style.color="color"
            >
                {{ data.module_name }}
            </div>
            <cvtEditor :index="idx"
                v-for="(html, idx) in cvtEditor(data.module_content)"
                class-name="text_eee text_normal_height"
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
        colors: ['#8ebbd8', '#7378b0', '#e59282', '#43576f', '#e3d3af'],
        // 间距基准值
        padding: 20,
        // 字体大小基准值
        fontSize: 16,
        // 组件
        component,
    };
})();
